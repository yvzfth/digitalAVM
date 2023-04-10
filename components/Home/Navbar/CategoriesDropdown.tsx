import { Dropdown } from '@nextui-org/react';

export default function App() {
  return (
    <Dropdown>
      <Dropdown.Button
        title='Kategoriler'
        light
        icon={
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='16.000000pt'
            height='16.000000pt'
            viewBox='0 0 128.000000 128.000000'
            preserveAspectRatio='xMidYMid meet'
          >
            <g
              transform='translate(0.000000,128.000000) scale(0.100000,-0.100000)'
              fill='#000000'
              stroke='none'
            >
              <path
                d='M172 1107 c-21 -22 -22 -33 -22 -183 0 -215 -11 -204 208 -204 215 0
202 -13 202 203 0 218 11 207 -206 207 -155 0 -161 -1 -182 -23z m318 -182 l0
-135 -135 0 -135 0 0 135 0 135 135 0 135 0 0 -135z'
              />
              <path
                d='M735 1105 c-24 -23 -25 -28 -25 -178 0 -141 2 -157 21 -181 l20 -26
164 0 c223 0 210 -13 210 205 0 217 12 205 -207 205 -155 0 -159 -1 -183 -25z
m315 -180 l0 -135 -130 0 -130 0 0 135 0 135 130 0 130 0 0 -135z'
              />
              <path
                d='M175 545 c-24 -24 -25 -28 -25 -183 0 -219 -12 -207 205 -207 218 0
205 -13 205 210 l0 164 -26 20 c-24 19 -40 21 -181 21 -150 0 -155 -1 -178
-25z m315 -185 l0 -130 -135 0 -135 0 0 130 0 130 135 0 135 0 0 -130z'
              />
              <path
                d='M845 558 c-164 -57 -179 -280 -24 -358 45 -23 116 -26 163 -6 33 14
35 13 62 -15 36 -38 77 -37 82 1 2 18 -6 34 -27 54 -28 27 -29 29 -15 62 64
153 -86 316 -241 262z m139 -99 c43 -37 54 -81 33 -132 -20 -47 -60 -72 -115
-72 -38 0 -48 5 -78 37 -28 32 -34 45 -34 84 0 39 5 51 34 80 29 29 41 34 80
34 36 0 52 -6 80 -31z'
              />
            </g>
          </svg>
        }
        css={{ padding: 0, pr: 8, '@md': { padding: 20 } }}
      >
        <div className='hidden md:block'>Kategoriler</div>
      </Dropdown.Button>
      <Dropdown.Menu
        color='secondary'
        aria-label='Kategoriler'
        css={{ $$dropdownMenuWidth: '250px' }}
      >
        <Dropdown.Section title='Kategoriler'>
          <Dropdown.Item key='new' description='800+ ürün <konumunda>'>
            Anne & Bebek
          </Dropdown.Item>
          <Dropdown.Item key='copy' description='1000+ ürün <konumunda>'>
            Elektronik
          </Dropdown.Item>
          <Dropdown.Item key='edit' description='2000+ ürün <konumunda>'>
            Kişisel Bakım
          </Dropdown.Item>
        </Dropdown.Section>
        <Dropdown.Section title='Markalarımız'>
          <Dropdown.Item
            key='delete'
            color='error'
            description='5000+ ürün <konumunda>'
          >
            Loftus
          </Dropdown.Item>
        </Dropdown.Section>
      </Dropdown.Menu>
    </Dropdown>
  );
}
