import React from 'react';
import './emailCard.css'

function EmailCard({emailData ,selected , handleCardClick}) {
  const {id,from:{email,name},date,subject,short_description} = emailData

  return (
    <div className='email-card-wrapper' onClick={()=>handleCardClick(id)}>
        <div className='email-card-logo'>N</div>
        <section className='email-card-content'>
            <div>From: <strong>{name} &lt;{email}&gt;</strong></div>
            <div>Subject: <strong>{subject}</strong></div>
            <p>{short_description}</p>
            <div className='email-card-time-button-wrapper'>
                <span>{date}</span>
                {true && <span className='email-card-time-favorite'>Favorite</span>}
            </div>
        </section>
    </div>
  )
}

export default EmailCard