import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	Heading,
	Input,
	Text,
	Textarea,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { sendContactForm } from '../../../lib/api.js'

const initValues = { name: '', email: '', subject: '', message: '' }

const initState = { isLoading: false, error: '', values: initValues }

export default function Home() {
	const toast = useToast()
	const [state, setState] = useState(initState)
	const [touched, setTouched] = useState({})

	const { values, isLoading, error } = state

	const onBlur = ({ target }) =>
		setTouched(prev => ({ ...prev, [target.name]: true }))

	const handleChange = ({ target }) =>
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}))

	const onSubmit = async () => {
		setState(prev => ({
			...prev,
			isLoading: true,
		}))
		try {
			await sendContactForm(values)
			setTouched({})
			setState(initState)
			toast({
				title: 'Message sent.',
				status: 'success',
				duration: 2000,
				position: 'top',
			})
		} catch (error) {
			setState(prev => ({
				...prev,
				isLoading: false,
				error: error.message,
			}))
		}
	}

	return (
		<Container maxW='550px' mt={12}>
			<Heading className='text-gray-100'>Contact</Heading>
			{error && (
				<Text color='red.300' my={4} fontSize='xl'>
					{error}
				</Text>
			)}

			<FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
				<Input
					type='text'
					name='name'
					placeholder='Name'
					errorBorderColor='red.300'
					value={values.name}
					onChange={handleChange}
					onBlur={onBlur}
					className='mt-6 text-gray-100'
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
				<Input
					type='email'
					name='email'
					placeholder='Email'
					errorBorderColor='red.300'
					value={values.email}
					onChange={handleChange}
					onBlur={onBlur}
					className='text-gray-100'
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				mb={5}
				isRequired
				isInvalid={touched.subject && !values.subject}
			>
				<Input
					type='text'
					name='subject'
					placeholder='Subject'
					errorBorderColor='red.300'
					value={values.subject}
					onChange={handleChange}
					onBlur={onBlur}
					className='text-gray-100'
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.message && !values.message}
				mb={5}
			>
				<Textarea
					type='text'
					name='message'
					placeholder='Message'
					rows={4}
					errorBorderColor='red.300'
					value={values.message}
					onChange={handleChange}
					onBlur={onBlur}
					className='text-gray-100'
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<Button
				variant='outline'
				colorScheme='gray'
				isLoading={isLoading}
				disabled={
					!values.name || !values.email || !values.subject || !values.message
				}
				onClick={onSubmit}
				className='text-gray-100'
				_hover={{ color: 'gray' }}
			>
				Submit
			</Button>
		</Container>
	)
}
