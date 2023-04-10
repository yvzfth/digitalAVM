import React from 'react';
import axios, { AxiosError } from 'axios';
import { Button } from '@nextui-org/react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { Text } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { useFormik } from 'formik';

const userInitialValues = {
  name: '',
  family_name: '',
  email: '',
  password: '',
};

const SignIn = () => {
  const [isSignIn, setIsSignIn] = React.useState(false);
  const router = useRouter();

  const signup = async (
    name: string,
    family_name: string,
    email: string,
    password: string
  ) => {
    await axios
      .post('/api/auth/signup', {
        data: { name, family_name, email, password },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success('Kayıt oluşturdu');
          router.push('/');
        }
      });
  };

  const signin = async (email: string, password: string) => {
    const status = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: '/',
    });

    if (status?.ok) router.push(status?.url!);
    // await axios
    //   .get('/api/user?' + `email=${email}&password=${password}`)
    //   .then((res) => {
    //     toast.success('Hoş geldiniz! 🎉🎉🎉');
    //     router.push('/');
    //   })
    //   .catch((error: AxiosError) =>
    //     error?.response?.status === 403
    //       ? toast.error('Email veya şifre hatalı!')
    //       : console.log(error)
    //   );
  };

  const formik = useFormik({
    initialValues: userInitialValues,
    validate(values) {
      const errors: {
        name?: string;
        family_name?: string;
        email?: string;
        password?: string;
      } = {};
      if (isSignIn) {
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        return errors;
      }
      if (!values.name) {
        errors.name = 'Required';
      } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
      }

      if (!values.family_name) {
        errors.family_name = 'Required';
      } else if (values.family_name.length > 20) {
        errors.family_name = 'Must be 20 characters or less';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (
        !(values.password.length >= 8 && values.password.length <= 20)
      ) {
        errors.password = 'Şifre 8 ile 20 karakter arasında olmalı';
      }

      return errors;
    },
    onSubmit: (values) => {
      isSignIn
        ? signin(values.email, values.password)
        : signup(
            values.name,
            values.family_name,
            values.email,
            values.password
          );
    },
  });
  return (
    <div className='relative flex flex-col justify-center items-center h-screen w-full'>
      <img className='absolute bottom-0 left-0' src='/a.svg' alt='a' />
      <img className='absolute top-0 right-0' src='/b.svg' alt='b' />

      <div className='mx-auto my-2' onClick={() => router.push('/')}>
        <img src='logo.svg' alt='logo' className='h-20' />
      </div>
      <form onSubmit={formik?.handleSubmit}>
        <div className={'flex flex-col justify-center w-[20rem]'}>
          <div hidden={isSignIn}>
            <div className='flex justify-between'>
              <div className='m-2'>
                <input
                  className='border rounded-md px-4 py-2 w-[9rem]'
                  type={'text'}
                  required={!isSignIn}
                  // error={_.isEmpty(user.name)}
                  // helperText={_.isEmpty(user.name) ? 'Name required' : ''}
                  {...formik.getFieldProps('name')}
                  placeholder='İsim'
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className='mx-2 text-rose-500'>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className=' m-2'>
                <input
                  className='border rounded-md px-4 py-2 w-[9rem]'
                  type={'text'}
                  required={!isSignIn}
                  {...formik.getFieldProps('family_name')}
                  placeholder='Soy ismi'
                />
                {formik.touched.family_name && formik.errors.family_name ? (
                  <div className='mx-2 text-rose-500'>
                    {formik.errors.family_name}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <input
            className='border rounded-md px-4 py-2 m-2'
            type={'email'}
            required
            {...formik.getFieldProps('email')}
            placeholder='Email'
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='mx-2 text-rose-500'>{formik.errors.email}</div>
          ) : null}

          <input
            className='border rounded-md px-4 py-2 m-2'
            type='password'
            required
            {...formik.getFieldProps('password')}
            placeholder='Şifre'
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='mx-2 text-rose-500'>{formik.errors.password}</div>
          ) : null}

          <Button
            type='submit'
            css={{ m: '.5rem', borderRadius: '.375rem' }}
            color='primary'
            // onPress={isSignIn ? signin : addUser}
          >
            {isSignIn ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>
          <div>
            <Text className='text-right mr-2 text-xs select-none'>
              {isSignIn
                ? 'Hesabınız henüz yok mu? '
                : 'Hesabınız zaten var mı? '}
              <span
                className='cursor-pointer hover:underline hover:text-[rgb(9,87,243)]'
                onClick={() => setIsSignIn((pre) => !pre)}
              >
                {isSignIn ? 'Kayıt ol' : 'Giriş Yap'}
              </span>
            </Text>
          </div>
          <hr className='m-4' />
          <Button
            css={{
              m: '.5rem',
              borderRadius: '.375rem',
              bgColor: '$white',
              color: '$primary',
            }}
            bordered
            color='primary'
            onPress={() => signIn('google')}
            // icon={<FcGoogle />}
          >
            <FcGoogle />
            oogle ile giriş yap
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
