import React from 'react';
import './Contact.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Contact = (props) => {

    return (
        <div id='contactSection' className='contact'>
            <h1 className='sectionHeader'>Contact Me!</h1>
            <hr className='sectionHr' id='contactHr' />
            <div className='contactLinkContainer'>
                <Tooltip title='View my Github profile!' arrow>
                    <a className='contactLink' href={props.gitHub} target='blank'><FontAwesomeIcon icon={faGithubSquare} /></a>
                </Tooltip>
                <Tooltip title='Contact me on LinkedIn!' arrow placement='top'>
                    <a className='contactLink' href={props.linkedIn} target='blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                </Tooltip>
                <Tooltip title='Download my resume!' arrow>
                    <a className='contactLink' href=''><FontAwesomeIcon icon={faFile} size='sm' style={{ paddingBottom: '2px' }} /></a>
                </Tooltip>
            </div>

            <form action="https://formspree.io/dmmarsh114@gmail.com" method="POST">
                <div className='contactForm'>
                    <div className='contactStack'>
                        <TextField id="nameInput" margin='normal' label="Name" variant="outlined" />
                        <TextField id="emailInput" margin='normal' label="Email" variant="outlined" />
                    </div>

                    <div className='contactMessage'>
                        <TextField multiline margin='normal' fullWidth rows={5} id="messageInput" label="Message" variant="outlined" />
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