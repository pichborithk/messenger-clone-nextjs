'use client';

import axios from 'axios';
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';
import MessageInput from './MessageInput';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CldUploadButton } from 'next-cloudinary';
import useConversation from '@/app/hooks/useConversation';
import { FormEvent, useState } from 'react';

type SubmitData = {
  message: string;
};

const Form = () => {
  const { conversationId } = useConversation();
  const [message, setMessage] = useState('');

  function handleSubmit(data: SubmitData) {
    return function (event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      axios.post('/api/messages', {
        ...data,
        conversationId: conversationId,
      });
      setMessage('');
    };
  }

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <div className='flex w-full items-center gap-2 border-t bg-white px-4 py-4 lg:gap-4'>
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset='pgc9ehd5'
      >
        <HiPhoto size={30} className='text-sky-500' />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit({ message })}
        className='flex w-full items-center gap-2 lg:gap-4'
      >
        <MessageInput
          id='message'
          required
          placeholder='Write a message'
          setValue={setMessage}
          value={message}
        />
        <button
          type='submit'
          className='cursor-pointer rounded-full bg-sky-500 p-2 transition hover:bg-sky-600'
        >
          <HiPaperAirplane size={18} className='text-white' />
        </button>
      </form>
    </div>
  );
};

export default Form;
