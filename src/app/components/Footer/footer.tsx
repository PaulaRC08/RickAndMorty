'use client';
import Image from 'next/image'
import { Navbar } from 'react-bootstrap';

export default function MyFooter() {
    return (
      <>
        <div className='bg-dark'>
          <div className='container d-flex flex-wrap justify-content-between pt-4 pt-3'>
            <div>
              <p className='fw-bold'>RICK AND MORTY CHARACTERS</p>
              <p>Paula Rodriguez Cuervo</p>
            </div>
            <div className='d-flex align-items-center'>
              <Image
                src="/images/footer/adultSwim.png"
                width={120}
                height={35}
                alt="Logo AdultSwim"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  