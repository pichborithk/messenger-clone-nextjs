'use client';

// import axios from 'axios';
// import { signIn, useSession } from 'next-auth/react';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
// import { toast } from 'react-hot-toast';

import AuthSocialButton from './AuthSocialButton';
import Input from '@/app/components/inputs/Input';
import Button from '@/app/components/Button';

type Variant = 'LOGIN' | 'REGISTER';

type SubmitData = {
  name?: string;
  email: string;
  password: string;
};

const AuthForm = () => {
  // const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   if (session?.status === 'authenticated') {
  //     router.push('/conversations');
  //   }
  // }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
    setName('');
    setEmail('');
    setPassword('');
  }, [variant]);

  function handleSubmit(data: SubmitData) {
    return async function (event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsLoading(true);

      // if (variant === 'REGISTER') {
      //   axios
      //     .post('/api/register', data)
      //     .then(() =>
      //       signIn('credentials', {
      //         ...data,
      //         redirect: false,
      //       })
      //     )
      //     .then(callback => {
      //       if (callback?.error) {
      //         toast.error('Invalid credentials!');
      //       }

      //       if (callback?.ok) {
      //         router.push('/conversations');
      //       }
      //     })
      //     .catch(() => toast.error('Something went wrong!'))
      //     .finally(() => setIsLoading(false));
      // }

      // if (variant === 'LOGIN') {
      //   signIn('credentials', {
      //     ...data,
      //     redirect: false,
      //   })
      //     .then(callback => {
      //       if (callback?.error) {
      //         toast.error('Invalid credentials!');
      //       }

      //       if (callback?.ok) {
      //         router.push('/conversations');
      //       }
      //     })
      //     .finally(() => setIsLoading(false));
      // }
    };
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    // signIn(action, { redirect: false })
    //   .then(callback => {
    //     if (callback?.error) {
    //       toast.error('Invalid credentials!');
    //     }

    //     if (callback?.ok) {
    //       router.push('/conversations');
    //     }
    //   })
    //   .finally(() => setIsLoading(false));
  };

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className=' bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-6'
          onSubmit={handleSubmit({ name, email, password })}
        >
          {variant === 'REGISTER' && (
            <Input
              disabled={isLoading}
              value={name}
              setValue={setName}
              required={true}
              id='name'
              label='Name'
            />
          )}
          <Input
            disabled={isLoading}
            value={email}
            setValue={setEmail}
            required={true}
            id='email'
            label='Email address'
            type='email'
          />
          <Input
            disabled={isLoading}
            value={password}
            setValue={setPassword}
            required={true}
            id='password'
            label='Password'
            type='password'
          />
          <div>
            <Button disabled={isLoading} fullWidth type='submit'>
              {variant === 'LOGIN' ? 'Sign in' : 'Register'}
            </Button>
          </div>
        </form>

        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-white px-2 text-gray-500'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex gap-2'>
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction('github')}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction('google')}
            />
          </div>
        </div>
        <div className='mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500'>
          <span>
            {variant === 'LOGIN'
              ? 'New to Messenger?'
              : 'Already have an account?'}
          </span>
          <span onClick={toggleVariant} className='cursor-pointer underline'>
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
