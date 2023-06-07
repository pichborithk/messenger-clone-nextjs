'use client';

import { Dispatch, SetStateAction } from 'react';
import ReactSelect, { MultiValue } from 'react-select';

interface Member {
  value: string;
  label: string;
}

interface Props {
  label: string;
  value?: Member[];
  // onChange: (value: Record<string, any>) => void;
  setValue: Dispatch<SetStateAction<Member[]>>;
  options: Member[];
  disabled?: boolean;
}

const Select = ({ label, value, setValue, options, disabled }: Props) => {
  return (
    <div className='z-[100]'>
      <label className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={(value: any) => setValue(value)}
          isMulti
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: base => ({ ...base, zIndex: 9999 }),
          }}
          classNames={{
            control: () => 'text-sm',
          }}
        />
      </div>
    </div>
  );
};

export default Select;
