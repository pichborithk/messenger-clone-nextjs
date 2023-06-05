'use client';

import { User } from '@prisma/client';

import UserBox from './UserBox';

interface Props {
  items: User[];
}

const UserList = ({ items }: Props) => {
  return (
    <aside className='left-0block fixed inset-y-0 w-full overflow-y-auto border-r border-gray-200 pb-20 lg:left-20 lg:block lg:w-80 lg:pb-0'>
      <div className='px-5'>
        <div className='flex-col'>
          <div className='py-4 text-2xl font-bold text-neutral-800'>People</div>
        </div>
        {items.map(item => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
