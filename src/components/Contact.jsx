// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='contact-card'>
            <img src={data.photo} alt="cat" />
            <div>
                <p><b>{data.name}</b></p>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
           
        </div>
    )
}

export default Contact;