import React, { useRef } from 'react';
import axios, { AxiosError } from 'axios';
import { Button } from '@nextui-org/react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { Text } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

interface User {
  name?: string;
  family_name?: string;
  email: string;
  password: string;
}

const userInitialValues = {
  name: '',
  family_name: '',
  email: '',
  password: '',
};

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState<User>(userInitialValues);
  const nameRef = useRef<HTMLDivElement>(null);
  const familyNameRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const emailRegex =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  function isValidEmail(email: string): boolean {
    // check if the email matches the basic pattern of a valid email address
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  }

  const inputErrorMessagePrompt = (
    ref: React.RefObject<HTMLDivElement>,
    innerHTML: string = ''
  ) => {
    ref.current!.hidden = false;
    if (!_.isEmpty(innerHTML)) {
      ref.current!.innerHTML = innerHTML;
    }
    // ref.current!.onchange = () => (ref.current!.hidden = true);
    formRef.current!.onchange = () => (ref.current!.hidden = true);
  };

  const addUser = async () => {
    if (_.every(user, (value) => !_.isEmpty(value))) {
      if (isValidEmail(user.email)) {
        await axios
          .post('/api/user', {
            data: user,
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success('Kayıt oluşturdu');
              router.push('/');
            }
          });
      } else {
        inputErrorMessagePrompt(emailRef, 'Email Hatalı!');
      }
    } else {
      const firstEmptyPropertyName = _.findKey(
        user,
        (value) => _.isNil(value) || _.isEmpty(value)
      );
      if (firstEmptyPropertyName === 'name') inputErrorMessagePrompt(nameRef);
      else if (firstEmptyPropertyName === 'family_name')
        inputErrorMessagePrompt(familyNameRef);
      else if (firstEmptyPropertyName === 'email')
        inputErrorMessagePrompt(emailRef);
      else if (firstEmptyPropertyName === 'password')
        inputErrorMessagePrompt(passwordRef);
    }
  };

  const signin = async () => {
    await axios
      .get('/api/user?' + `email=${user.email}&password=${user.password}`)
      .then((res) => {
        toast.success('Hoş geldiniz! 🎉🎉🎉');
        router.push('/');
      })
      .catch((error: AxiosError) =>
        error?.response?.status === 403
          ? toast.error('Email veya şifre hatalı!')
          : console.log(error)
      );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      <div className='mx-auto my-2' onClick={() => router.push('/')}>
        <img src='logo.svg' alt='logo' className='h-20' />
      </div>
      <form ref={formRef}>
        <div className={'flex flex-col justify-center w-[20rem]'}>
          <div hidden={isLogin}>
            <div className='flex justify-between'>
              <div className='m-2'>
                <input
                  className='border rounded-md px-4 py-2 w-[9rem]'
                  type={'text'}
                  id='name-label'
                  name='name'
                  required={!isLogin}
                  // error={_.isEmpty(user.name)}
                  // helperText={_.isEmpty(user.name) ? 'Name required' : ''}
                  value={user.name}
                  onChange={handleInputChange}
                  placeholder='İsim'
                />
                <div ref={nameRef} hidden className='p-2 text-red-700 text-xs'>
                  İsim zorunlu!
                </div>
              </div>
              <div className=' m-2'>
                <input
                  className='border rounded-md px-4 py-2 w-[9rem]'
                  type={'text'}
                  id='family_name-label'
                  name='family_name'
                  required={!isLogin}
                  value={user.family_name}
                  onChange={handleInputChange}
                  placeholder='Soy ismi'
                />
                <div
                  ref={familyNameRef}
                  hidden
                  className='p-2 text-red-700 text-xs'
                >
                  Soy ismi zorunlu!
                </div>
              </div>
            </div>
          </div>

          <input
            className='border rounded-md px-4 py-2 m-2'
            type={'email'}
            id='email-label'
            name='email'
            required
            // error={!isValidEmail(user.email)}
            // helperText={!isValidEmail(user.email) ? 'Email hatalı!' : ''}
            value={user.email}
            onChange={handleInputChange}
            placeholder='Email'
          />
          <div ref={emailRef} hidden className='p-2 text-red-700 text-xs'>
            Email zorunlu!
          </div>

          <input
            className='border rounded-md px-4 py-2 m-2'
            type='password'
            id='password'
            name='password'
            required
            value={user.password}
            onChange={handleInputChange}
            placeholder='Şifre'
          />
          <div ref={passwordRef} hidden className='p-2 text-red-700 text-xs'>
            Şifre Zorunlu!
          </div>

          <Button
            css={{ m: '.5rem', borderRadius: '.375rem' }}
            color='primary'
            onPress={isLogin ? signin : addUser}
          >
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>
          <div>
            <Text className='text-right mr-2 text-xs select-none'>
              {isLogin
                ? 'Hesabınız henüz yok mu? '
                : 'Hesabınız zaten var mı? '}
              <span
                className='cursor-pointer hover:underline hover:text-[rgb(9,87,243)]'
                onClick={() => setIsLogin((pre) => !pre)}
              >
                {isLogin ? 'Kayıt ol' : 'Giriş Yap'}
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

export default Login;
