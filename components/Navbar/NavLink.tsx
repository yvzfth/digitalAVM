import Link from 'next/link';
import React from 'react';

const NavLink = ({ title, path }: { title: string; path: string }) => {
  return (
    <Link href={'/' + path} className='text-white'>
      {title}
    </Link>
  );
};

export default NavLink;
