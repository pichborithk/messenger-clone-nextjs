'use client';

// import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
// import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  // onChange: () => void;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  const {
    label,
    id,
    value,
    setValue,
    // onChange,
    required,
    type = 'text',
    disabled,
  } = props;

  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          value={value}
          onChange={event => setValue(event.target.value)}
          required={required}
          className={`form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-sky-600 sm:text-sm sm:leading-6
          ${disabled && 'cursor-default opacity-50'}`}
        />
      </div>
    </div>
  );
};

export default Input;
