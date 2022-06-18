// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    return (
        <>
            <img src={data.photo} alt="cat" />
            <p>{data.name}</p>
            <>{data.phone}</>
            <>{data.email}</>
        </>
    )
}

export default Contact;