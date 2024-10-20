'use client';
import {} from 'react'
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from './card-character.module.scss'
import { getGenderIcon, getStatusIcon } from '@/app/core/utils/globals';

const CardCharacter = (props: {
    character: Character
}) => {
    return (
        <Card className={`${styles.cardCharacter} shadow text-white mb-4 me-2`}>
            <Card.Body className="position-relative">
                <div className="position-absolute bg-dark rounded-pill ms-1 mt-1 py-1 px-2 d-flex">
                    { getStatusIcon(props.character.status) }
                    <p className='m-0'>{props.character.status}</p>
                </div>
                <Image 
                    src={props.character.image}
                    className='mb-2'
                    fluid
                />
                <Card.Title>{props.character.name}</Card.Title>
                <div className='d-flex justify-content-start'>
                    { getGenderIcon(props.character.gender) }
                    <p className='mb-2'>{props.character.species} - {props.character.gender}</p>
                </div>
                <div>
                    <p className='mb-0'>
                        <span className='text-white-50'>Location</span><br />
                        {props.character.location.name}
                    </p>
                </div>
            </Card.Body>
            <Card.Footer className={`${styles.cardFooter} bg-primary d-flex p-0`}>
                <div className={`${styles.numberChapters} bg-secondary fw-bold p-2 d-flex align-items-center justify-content-center`}>
                    <p className='fs-5 mb-1 p-1'>{ props.character.episode.length }</p>
                </div>
                <div className='p-2'>
                    <p className='mb-1'>Chapters where it is seen</p>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default CardCharacter;