'use client';

import Modal from '@/app/components/modals/Modal';
import Image from 'next/image';

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal = ({ isOpen, onClose, src }: Props) => {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='h-80 w-80'>
        <Image
          className='object-cover'
          fill
          sizes='100%'
          alt='Image'
          src={src}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
