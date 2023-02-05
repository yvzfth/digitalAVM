import React, { useRef } from 'react';
import axios from 'axios';
import {
  Button,
  FormControl,
  TextField,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import _ from 'lodash';
import { useRouter } from 'next/router';
declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    neutral: {
      main: 'rgb(13,25,152)',
      contrastText: '#fff',
    },
  },
});
// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

interface User {
  name: string;
  family_name: string;
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
    ref.current!.onchange = () => (ref.current!.hidden = true);
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
            if (res.status === 200) router.push('/');
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

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <form ref={formRef}>
        <div className={'flex flex-col w-[18rem]'}>
          <div className='flex'>
            <FormControl sx={{ m: 1 }}>
              <TextField
                type={'text'}
                label='İsim'
                id='name-label'
                name='name'
                required
                // error={_.isEmpty(user.name)}
                // helperText={_.isEmpty(user.name) ? 'Name required' : ''}
                value={user.name}
                onChange={handleInputChange}
                placeholder='İsim'
              />
              <div
                ref={nameRef}
                hidden
                className='text-center p-2 text-red-700 text-xs'
              >
                İsim zorunlu!
              </div>
            </FormControl>
            <FormControl sx={{ m: 1 }}>
              <TextField
                type={'text'}
                label='Soy ismi'
                id='family_name-label'
                name='family_name'
                required
                value={user.family_name}
                onChange={handleInputChange}
                placeholder='Soy ismi'
              />
              <div
                ref={familyNameRef}
                hidden
                className='text-center p-2 text-red-700 text-xs'
              >
                Soy ismi zorunlu!
              </div>
            </FormControl>
          </div>
          <FormControl sx={{ m: 1 }}>
            <TextField
              type={'email'}
              label='Email'
              id='email-label'
              name='email'
              required
              // error={!isValidEmail(user.email)}
              // helperText={!isValidEmail(user.email) ? 'Email hatalı!' : ''}
              value={user.email}
              onChange={handleInputChange}
              placeholder='Email'
            />
            <div
              ref={emailRef}
              hidden
              className='text-center p-2 text-red-700 text-xs'
            >
              Email zorunlu!
            </div>
          </FormControl>
          <FormControl sx={{ m: 1 }}>
            <TextField
              type='password'
              label='Şifre'
              id='password'
              name='password'
              required
              inputProps={{
                autoComplete: 'new-password',
              }}
              value={user.password}
              onChange={handleInputChange}
              placeholder='Şifre'
            />
            <div
              ref={passwordRef}
              hidden
              className='text-center p-2 text-red-700 text-xs'
            >
              Şifre Zorunlu!
            </div>
          </FormControl>
          <ThemeProvider theme={theme}>
            <Button
              sx={{ m: 1 }}
              variant='contained'
              color='neutral'
              onClick={addUser}
            >
              Kayıt Ol
            </Button>
          </ThemeProvider>
        </div>
      </form>
    </div>
  );
};

export default Login;
