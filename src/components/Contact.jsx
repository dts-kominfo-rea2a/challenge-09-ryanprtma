// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ props }) => {
    return (
        <>
            <img src={props.photo} alt="cat" />
            <p>{props.name}</p>
            <>{props.phone}</>
            <>{props.email}</>
        </>
    )
}

export default Contact;