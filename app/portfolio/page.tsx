'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import FirstSection from './firstSection/firstSection';
import ThirdSection from './thirdSection/thirdSection';
import FirstSectionSlider from './firstSection/firstSectionSlider';
import Explore from './secondSection/cards/Explore';
import Title from './secondSection/secondSectionTitle';
import Footer from './footerSection/footerSection';

export default function Example() {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-gradient-to-tl from-zinc-50/10 via-zinc-100 to-zinc-50/10">
      <header ref={ref}>
        <div
          className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
            isIntersecting
              ? 'bg-zinc-900/0 border-transparent'
              : 'bg-zinc-900/500  border-zinc-800 '
          }`}
        >
          <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
            <div className="flex justify-between gap-8">
              <Link
                href="/portfolio"
                className="duration-200 text-zinc-600 hover:text-zinc-100"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="duration-200 text-zinc-600 hover:text-zinc-100"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/"
              className="duration-200 text-zinc-200 hover:text-zinc-100"
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <FirstSection />

        <FirstSectionSlider
          isMobile={false}
          isTablet={false}
          isDesktop={false}
        />

        <Title />

        <Explore />

        <ThirdSection />
        <Footer />
      </main>
    </div>
  );
}
