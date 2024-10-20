'use client';
import React, { useState } from 'react'
import useCallServiceApi  from "./../../hooks/use-call-service-api";
import CardCharacter from "./components/card-character";
import Lottie from 'react-lottie';
import animationData from './../../../../public/images/list-characters/AnimationRick.json';
import { Alert, Button, Spinner } from 'react-bootstrap';

export default function ListCharacters() {

    const { loading, data, error } = useCallServiceApi('/character');

    const [visibleItems, setVisibleItems] = useState(10);
    const onClickSeeMore = () => {
      setVisibleItems((prevVisibleItems) => 
        prevVisibleItems + 5
      );
    };

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

        <div className='d-flex flex-wrap justify-content-center justify-content-lg-around mt-5'>
          {data && data.slice(0, visibleItems).map((character: Character, index: number) => (
            <CardCharacter
            key={`Character-${index}`}
            character={character}/>
          ))}
        </div>


        {data && visibleItems < data.length && (
          <div className='d-flex justify-content-center my-4'>
            <Button variant="light" size="lg" onClick={onClickSeeMore}>
              SEE MORE
              <i className="bi bi-arrow-down ms-2"></i>
            </Button>
          </div>
        )}

      </>
    );
}
  