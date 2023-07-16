import React from 'react'
import './emailBodyCard.css'

function EmailBodyCard() {
    return (
        <div className='email-body-wrapper'>
            <div className='email-body-card-logo'>N</div>
            <section>
                <header className='email-body-header'>
                    <h1 className="email-body-subject">Hello</h1>
                    <button
                        className="email-body-btn"
                    // onClick={() => dispatch(removeFromFavorites(id))}
                    >
                        Remove from favorite
                    </button>
                </header>
                <p>11/11/11 10:11am</p>
                <article className='email-body-main-content'>Hehcsncndcbdncnkd</article>
            </section>
        </div>
    )
}

export default EmailBodyCard