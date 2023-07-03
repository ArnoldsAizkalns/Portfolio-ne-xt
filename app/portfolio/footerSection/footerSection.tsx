import * as React from 'react';
import Link from 'next/link';

export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <div className="w-full h-auto">
        <div className="border border-b mt-[4px] border-gray-500"></div>
        <div className={'flex flex-col items-center justify-center pt-10 pb-2'}>
          <Link href="/">
            <h2 className={'font-display text-lg'}>NE-XT</h2>
          </Link>
          <p className={'text-gray-500 pt-2'}>
            @ Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
