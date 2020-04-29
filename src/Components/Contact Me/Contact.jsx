import React from 'react';
import './Contact.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Contact = (props) => {

    return (
        <section>
            <form
                className='contact-form'
                action="https://formspree.io/dmmarsh114@gmail.com"
                method="POST"
            >
                <h3 className='contact-header'>Like What You See?</h3>
                <p>Contact Me!</p>
                <hr />
                <div className='contact-inputs'>
                    <TextField
                        placeholder='Name'
                        helperText='Required*'
                        margin='normal'
                        variant='outlined'
                        required
                    />
                    <TextField
                        placeholder='Email'
                        helperText='Required*'
                        margin='normal'
                        variant='outlined'
                        required
                    />
                    <TextField
                        placeholder='Phone'
                        helperText='Optional'
                        margin='normal'
                        variant='outlined'
                    />
                </div>
                <TextField
                    placeholder='Message'
                    helperText='Optional'
                    variant='outlined'
                    multiline
                    fullWidth
                    rowsMax={4}
                    rows={4}
                />
                <div className='contact-button-container'>
                    <Button type='submit' color='primary' variant='contained' id='contact-submit-button'>Send Message</Button>
                </div>
            </form>
        </section>
    );
}

export default Contact;