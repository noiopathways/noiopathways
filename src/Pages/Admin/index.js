import { useState, useEffect } from 'react'
import Navigation from '../../Components/Navigation'
import Footer from '../../Components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import React from 'react';

export const AdminPage = () => {
    const [collab, setCollab] = useState()

    // useEffect(() => {
    //     console.log('collab::', collab)
    // }, [collab])

    const onSubmit = () => {
        console.log('clicked submit for ', collab)
    }

    return (
        <div className="landingPage">
            <Navigation />

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>add collaborators</Form.Label>
                    <Form.Control type={'string'} placeholder="testing" onChange={(e) => setCollab(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type='button' onClick={onSubmit}>
                    Submit
                </Button>
            </Form>

            API RETURN:


            <Footer />
        </div>
    )
}

