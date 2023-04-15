import { Dropdown, Avatar, Text, User } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import { FaRegUser } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { BsHeart } from 'react-icons/bs';
export default function App() {
  const router = useRouter();
  const session = useSession();
  const username = session.data?.user?.name
    ?.replaceAll(' ', '')
    .toLocaleLowerCase();
  return (
    <Dropdown placement='bottom-left'>
      <Dropdown.Trigger>
        <div>
          <div className='md:hidden'>
            <Avatar
              as='button'
              color='primary'
              text={session?.data?.user?.name?.charAt(0)}
              src={session.data?.user?.image!}
            />
          </div>
          <div className='hidden md:flex'>
            <User
              as='button'
              color='primary'
              name={session.data?.user?.name}
              text={session?.data?.user?.name?.charAt(0)}
              description={'@' + username}
              src={session.data?.user?.image!}
            />
          </div>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu color='secondary' aria-label='Avatar Actions'>
        <Dropdown.Item key='profile' css={{ height: '$18' }}>
          <div className='flex items-center gap-2'>
            <FaRegUser />
            <Text b color='inherit' css={{ d: 'flex' }}>
              {session.data?.user?.email!}
            </Text>
          </div>
        </Dropdown.Item>
        <Dropdown.Item key='settings' withDivider>
          My Settings
        </Dropdown.Item>
        <Dropdown.Item key='likes'>
          <div className='flex items-center gap-2'>
            <BsHeart />
            <Text onClick={() => router.push('/' + username + '/likes')}>
              Likes
            </Text>
          </div>
        </Dropdown.Item>
        <Dropdown.Item key='analytics' withDivider>
          Analytics
        </Dropdown.Item>
        <Dropdown.Item key='system'>System</Dropdown.Item>
        <Dropdown.Item key='configurations'>Configurations</Dropdown.Item>
        <Dropdown.Item key='help_and_feedback' withDivider>
          Help & Feedback
        </Dropdown.Item>
        <Dropdown.Item key='logout' color='error' withDivider>
          <div onClick={() => signOut()}>Log Out</div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
