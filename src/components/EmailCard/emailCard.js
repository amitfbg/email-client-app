import React from 'react';
import './emailCard.css'

function EmailCard() {
  return (
    <div className='email-card-wrapper'>
        <div className='email-card-logo'>N</div>
        <section className='email-card-content'>
            <div>From: <strong>hello &lt;abc@gmail.com&gt;</strong></div>
            <div>Subject: <strong>test</strong></div>
            <p>Hello</p>
            <div className='email-card-time-button-wrapper'>
                <span>11/11/1111 10:11am</span>
                {true && <span className='email-card-time-favorite'>Favorite</span>}
            </div>
        </section>
    </div>
  )
}

export default EmailCard