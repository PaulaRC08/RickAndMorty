'use client';
import React from 'react'
import useCallServiceApi  from "./../../hooks/use-call-service-api";
import CardCharacter from "./components/card-character";
import Lottie from 'react-lottie';
import animationData from './../../../../public/images/list-characters/AnimationRick.json';
import { Alert, Spinner } from 'react-bootstrap';

export default function ListCharacters() {

    const { loading, data, error } = useCallServiceApi('/character');

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <>
        <div className="mt-5">
          <h1 className="pt-4">MEET THEIR CHARACTERS</h1>
        </div>

        {loading &&
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <Lottie 
              options={defaultOptions}
              height={200}
              width={200}
            />
            <p className='fst-italic'>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className='me-1'
              />
              LOADING DATA...
            </p>
          </div>
        }

        {error && 
            <Alert variant='warning'>
              {error}
            </Alert>
        }

        <div className='d-flex flex-wrap justify-content-center justify-content-lg-between mt-5'>
          {data && data.map((character: Character, index: number) => (
            <CardCharacter
            key={`Character-${index}`}
            character={character}/>
          ))}
        </div>

      </>
    );
}
  