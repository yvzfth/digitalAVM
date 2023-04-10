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
                d='M185 1191 c-89 -41 -115 -98 -115 -248 0 -84 5 -117 19 -148 22 -47
         64 -89 104 -104 41 -16 379 -15 395 1 16 16 17 354 1 395 -15 40 -57 82 -104
         104 -57 27 -243 27 -300 0z m283 -75 c49 -25 57 -55 57 -215 l0 -146 -146 0
         c-215 0 -229 12 -229 196 l0 111 34 34 34 34 111 0 c77 0 121 -4 139 -14z'
              />
              <path
                d='M795 1191 c-47 -22 -89 -64 -104 -104 -6 -16 -11 -106 -11 -212 0
         -157 2 -184 16 -189 27 -10 361 -7 391 5 40 15 82 57 104 104 14 31 19 64 19
         148 0 150 -26 207 -115 248 -57 27 -243 27 -300 0z m301 -95 l34 -34 0 -111
         c0 -184 -14 -196 -229 -196 l-146 0 -3 128 c-5 226 12 247 197 247 l113 0 34
         -34z'
              />
              <path
                d='M185 586 c-39 -18 -80 -62 -99 -108 -24 -56 -22 -240 3 -293 41 -89
         98 -115 248 -115 84 0 117 5 148 19 47 22 89 64 104 104 16 41 15 379 -1 395
         -18 18 -363 16 -403 -2z m340 -207 c0 -215 -12 -229 -196 -229 l-111 0 -34 34
         -34 34 0 113 c0 185 17 199 240 196 l135 -2 0 -146z'
              />
              <path
                d='M686 584 c-10 -27 -7 -361 5 -391 15 -40 57 -82 104 -104 57 -27 243
         -27 300 0 89 41 115 98 115 248 0 120 -15 167 -66 215 -47 43 -74 48 -269 48
         -157 0 -184 -2 -189 -16z m395 -77 c40 -27 49 -59 49 -178 l0 -111 -34 -34
         -34 -34 -113 0 c-183 0 -199 19 -199 241 0 69 3 129 8 133 4 4 72 6 152 4 118
         -2 150 -6 171 -21z'
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
