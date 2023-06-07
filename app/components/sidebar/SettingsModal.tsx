'use client';

import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { User } from '@prisma/client';
import { CldUploadButton } from 'next-cloudinary';

import Input from '../inputs/Input';
import Modal from '../modals/Modal';
import Button from '../Button';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  currentUser: User;
}

interface SubmitData {
  name: string;
  image: string;
}

const SettingsModal = ({ isOpen, onClose, currentUser }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(currentUser.name!);
  const [image, setImage] = useState(currentUser.image!);

  console.log(currentUser, '&TEST_CURRENT_USER');

  const handleUpload = (result: any) => {
    setImage(result?.info?.secure_url);
  };

  function handleSubmit(data: SubmitData) {
    return function (event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsLoading(true);

      axios
        .post('/api/settings', data)
        .then(() => {
          router.refresh();
          onClose();
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
    };
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit({ name, image })}>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Profile
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Edit your public information.
            </p>

            <div className='mt-10 flex flex-col gap-y-8'>
              <Input
                disabled={isLoading}
                label='Name'
                id='name'
                value={name}
                required
                setValue={setName}
              />
              <div>
                <label
                  htmlFor='photo'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Photo
                </label>
                <div className='mt-2 flex items-center gap-x-3'>
                  <Image
                    width='48'
                    height='48'
                    className='rounded-full'
                    src={
                      image || currentUser?.image || '/images/placeholder.jpg'
                    }
                    alt='Avatar'
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET}
                  >
                    <Button disabled={isLoading} secondary type='button'>
                      Change
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <Button disabled={isLoading} secondary onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={isLoading} type='submit'>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default SettingsModal;
