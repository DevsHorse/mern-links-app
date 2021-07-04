import React from 'react'


export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>
            <p>Your link: 
                <br />
                <a href={link.to} target="_black" rel="noopener noreferer">{link.to}</a>
            </p>
            <p>From: 
            <br />
                <a href={link.from} target="_black" rel="noopener noreferer">{link.from}</a>
            </p>
            <p>Click count of link: 
            <br />
               <strong>{link.clicks}</strong>
            </p>
            <p>Date of create:
            <br />
             <strong>{new Date(link.date).toLocaleDateString()}</strong>
             </p>
        </>
    )
}