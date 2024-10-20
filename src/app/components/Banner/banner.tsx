'use client';
import {} from 'react'
import Image from 'next/image'
import styles from './banner.module.scss'
import ObjectFloating from './components/objectFloating'

export default function MyBanner() {
    return (
      <>

        <div className={`${styles.bannerImage} rounded-3 mb-4 pb-5 pt-3`}>
          <ObjectFloating
            top={true}
            classPosition={'objectTopLeft'}
            srcImage={'/images/banner/plumbus.svg'}
            size={80} 
            altImage={'Object Plumbus to Rick and Morty'}/>
          <ObjectFloating
            top={true}
            classPosition={'objectTopRigth'}
            srcImage={'/images/banner/casco.svg'}
            size={110} 
            altImage={'Object helmet to Rick and Morty'}/>
          <div className='d-flex flex-column align-items-center mt-3'>
            <Image
              src="/images/banner/RickMortyLogoColor.png"
              width={450}
              height={150}
              alt="Main characters logo"
              layout="responsive"
            />
            <hr className={`${styles.hrDivider} border border-white border-2`}/>
            <p className='text-center mx-2'>Follows the adventures of an alcoholic scientist, Rick, and his grandson Morty, as they travel through dimensions, facing absurd and dangerous situations.</p>
          </div>
        </div>
        <ObjectFloating
          top={false}
          classPosition={'objectBottomLeft'}
          srcImage={'/images/banner/megasemillas.svg'}
          size={100} 
          altImage={'Object Mega seeds to Rick and Morty'}/>
        <ObjectFloating
          top={false}
          classPosition={'objectBottomRigth'}
          srcImage={'/images/banner/cajamesseks.svg'}
          size={100} 
          altImage={'Object Box Messeks seeds to Rick and Morty'}/>
      </>
    );
}
  