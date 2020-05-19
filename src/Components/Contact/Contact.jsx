import React from 'react';
import './Contact.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Col, Row, Container } from 'reactstrap';

const Contact = () => {

    return (
        <div id='contactSection' className='contact'>
            <h1 className='sectionHeader'>Contact Me!</h1>
            <hr className='sectionHr' />
            <form action="https://formspree.io/dmmarsh114@gmail.com" method="POST">

                <div className='contactForm'>
                    <div className='contactStack'>
                        <TextField id="nameInput" margin='normal' label="Name" variant="outlined" />
                        <TextField id="emailInput" margin='normal' label="Email" variant="outlined" />
                    </div>

                    <div className='contactMessage'>
                        <TextField multiline margin='normal' fullWidth rows={10} id="messageInput" label="Message" variant="outlined" />
                    </div>

                    <div>
                        <Button id='sendButton' variant='contained' type="submit">send</Button>
                    </div>
                </div>
            </form>

        </div >





        // <div>
        //     <h1 className='sectionHeader'>Contact Me!</h1>
        //     <form
        //         className='contact-form'
        //         action="https://formspree.io/dmmarsh114@gmail.com"
        //         method="POST"
        //     >
        //         <div className='contact-inputs'>
        //             <TextField
        //                 placeholder='Name'
        //                 helperText='Required*'
        //                 margin='normal'
        //                 variant='outlined'
        //                 required
        //             />
        //             <TextField
        //                 placeholder='Email'
        //                 helperText='Required*'
        //                 margin='normal'
        //                 variant='outlined'
        //                 required
        //             />
        //             <TextField
        //                 placeholder='Phone'
        //                 helperText='Optional'
        //                 margin='normal'
        //                 variant='outlined'
        //             />
        //         </div>
        //         <TextField
        //             placeholder='Message'
        //             helperText='Optional'
        //             variant='outlined'
        //             multiline
        //             fullWidth
        //             rowsMax={4}
        //             rows={4}
        //         />
        //         <div className='contact-button-container'>
        //             <Button type='submit' color='primary' variant='contained' id='contact-submit-button'>Send Message</Button>
        //         </div>
        //     </form>
        // </div>
    );
}

export default Contact;