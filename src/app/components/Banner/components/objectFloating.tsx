'use client';
import {} from 'react'
import Image from 'next/image'
import styles from './../banner.module.scss'

const ObjectFloating = (props: {
        top: boolean,
        classPosition: string,
        srcImage: string,
        altImage: string
        size: number
    }) => {
    return (
        <div className={`container ${props.top ? 'mb-5 mb-md-4 pb-2' : 'mt-5 mt-md-4'}`}>
          <div className="position-relative">
            <div className={`${styles[props.classPosition]} position-absolute`}>
              <Image
                src={props.srcImage}
                width={props.size}
                height={props.size}
                alt={props.altImage}
              />
            </div>
          </div>
        </div>
    );
}

export default ObjectFloating;