'use client';

import Link from 'next/link';
import { IconType } from 'react-icons';

// import clsx from 'clsx';

interface Props {
  href: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem = ({ href, icon: Icon, active, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`group flex w-full justify-center gap-x-3 p-4 text-sm font-semibold leading-6 text-gray-500 hover:bg-gray-100 hover:text-black
      ${active && 'bg-gray-100 text-black'}`}
    >
      <Icon className='h-6 w-6' />
    </Link>
  );
};

export default MobileItem;
