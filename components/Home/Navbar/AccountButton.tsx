import { Dropdown, Avatar, Text, User } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';

export default function App() {
  const session = useSession();
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
              description={
                '@' +
                session.data?.user?.name
                  ?.replaceAll(' ', '')
                  .toLocaleLowerCase()
              }
              src={session.data?.user?.image!}
            />
          </div>
        </div>
      </Dropdown.Trigger>
      <Dropdown.Menu color='secondary' aria-label='Avatar Actions'>
        <Dropdown.Item key='profile' css={{ height: '$18' }}>
          <Text b color='inherit' css={{ d: 'flex' }}>
            Signed in as
          </Text>
          <Text b color='inherit' css={{ d: 'flex' }}>
            {session.data?.user?.email!}
          </Text>
        </Dropdown.Item>
        <Dropdown.Item key='settings' withDivider>
          My Settings
        </Dropdown.Item>
        <Dropdown.Item key='team_settings'>Team Settings</Dropdown.Item>
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
