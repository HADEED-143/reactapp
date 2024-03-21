import React from 'react';

const ContactPage = () => (
    <div className='contact-container'>
        <div className='contact-grid-container'></div>
        <div className='grid'>
            <div className='contact-flex'>
                <div className='space-v4' />
                <div className='contact-header'>
                    <h1>Contact</h1>
                    <h2>Learn Online Quran Tutor Zone</h2>
                </div>
                <div className='space-v4' />
                <div className='contact-flex-content'>
                    <h1>Say Hello!</h1>
                    <h6>Call us on <a href='#'>+00(0) 000000000</a>. if you need an instant help, otherwise please fill the form below.</h6>
                </div>
                <div className='contact-content-card'>
                    {contactData.map(data => <ContactCard key={data.icon} {...data} />)}
                </div>
                <div className='space-v4' />
            </div>
            <form className='contact-card contact-form'>
                <h2>Contact Form</h2>
                <div className='contact-list-input'>
                    <label className='contact-form-label'>Name</label>
                    <input type='text' placeholder='Enter name' className='contact-form-input' />
                    <label className='contact-form-label'>Phone number</label>
                    <input type='text' placeholder='Enter Phone' className='contact-form-input' />
                    <label className='contact-form-label'>Email address</label>
                    <input type='email' placeholder='Enter Email' className='contact-form-input' />
                    <label className='contact-form-label'>Message</label>
                    <textarea rows="4" cols="50" className='contact-form-input' />
                    <button className='btn-1 contact-form-btn'>Send Message</button>
                </div>
            </form>
            <div style={{ height: 200 }} />
        </div>
    </div>
)

export default ContactPage


const ContactCard = ({ icon, phoneNumber, nameApp }) => (
    <div className='contact-card'>
        <img src={icon} />
        <p>{phoneNumber}</p>
        <a href='#'>{nameApp}</a>
    </div>
)

const contactData = [
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/flags/united-states@2x.png',
        phoneNumber: '+0000000',
        nameApp: 'Call Now'
    },
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/flags/whatsapp@2x.png',
        phoneNumber: '+000000000',
        nameApp: 'WhatApp'
    },
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/icons/skype2.svg',
        phoneNumber: 'Online Quran Tutor Zone',
        nameApp: 'Skype'
    },
    {
        icon: 'http://www.learnquran.com.au/vendor/local/imgs/icons/email.svg',
        phoneNumber: 'info@Online Quran Tutor Zone',
        nameApp: 'Send Email'
    },
]