'use client';
import Image from 'next/image'
import { Navbar } from 'react-bootstrap';

export default function MyNavbar() {
    return (
      <>
        <Navbar bg="dark" className='bg-gray-700' sticky="top">
          <div className='d-flex justify-content-start mx-3'>
            <Image
                src="/images/navbar/rickymortyLogo.png"
                className='me-2'
                width={40}
                height={40}
                alt="Main characters logo"
              />
            <Image
              src="/images/navbar/rickymortyLetras.png"
              width={137}
              height={40}
              alt="Original logo of the Rick and Morty series in white"
            />
          </div>
        </Navbar>
      </>
    );
  }
  