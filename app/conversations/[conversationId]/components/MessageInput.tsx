'use client';

import { Dispatch, SetStateAction } from 'react';
// import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const MessageInput = ({
  placeholder,
  id,
  type,
  required,
  setValue,
  value,
}: Props) => {
  return (
    <div className='relative w-full'>
      <input
        id={id}
        type={type}
        autoComplete={id}
        onChange={event => setValue(event.target.value)}
        placeholder={placeholder}
        required={required}
        value={value}
        className='w-full rounded-full bg-neutral-100 px-4 py-2 font-light text-black focus:outline-none'
      />
    </div>
  );
};

export default MessageInput;
