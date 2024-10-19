'use client';
import {} from 'react'
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import styles from './card-character.module.scss'

const CardCharacter = (props: {
        name: string,
        status: string,
        species: string,
        gender: string,
        location: string,
        numberChapters: string
    }) => {
    return (
        <Card className={`${styles.cardCharacter} shadow text-white`}>
            <Card.Body className="position-relative">
                <div className="position-absolute bg-dark rounded-pill ms-1 mt-1 py-1 px-2 d-flex">
                    <i className="bi bi-heart-fill text-danger me-2"></i>
                    <p className='m-0'>{props.status}</p>
                </div>
                <Image 
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    className='mb-2'
                    fluid
                />
                <Card.Title>{props.name}</Card.Title>
                <div className='d-flex justify-content-start'>
                    <i className="bi bi-gender-female me-1"></i>
                    <p className='mb-2'>{props.species} - {props.gender}</p>
                </div>
                <div>
                    <p className='mb-0'>
                        <span className='text-white-50'>Location</span><br />
                        {props.location}
                    </p>
                </div>
            </Card.Body>
            <Card.Footer className={`${styles.cardFooter} bg-primary d-flex p-0`}>
                <div className={`${styles.numberChapters} bg-secondary fw-bold p-2 d-flex align-items-center`}>
                    <p className='fs-5 mb-1 p-1'>{props.numberChapters}</p>
                </div>
                <div className='p-2'>
                    <p className='mb-1'>Chapters where it is seen</p>
                </div>
            </Card.Footer>
        </Card>
    );
}

export default CardCharacter;