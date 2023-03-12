import './Contact.css'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { useForm, ValidationError } from '@formspree/react';

const Contact = ({ id }) => {
    const [state, handleSubmit] = useForm("xoqzldgd");
    if (state.succeeded) {
        return <p>Thanks for Emailing!</p>;
    }

    return (
        <div className='contact-page-ctn' id={id}>
            <div className='contact-div'>
                <div className='contact-title-div'>
                    <h2>Contact Me</h2>
                    <h3>Let's grab a virtual coffee and make some magic happen!</h3>
                    <p style={{ color: 'white' }}>Atlanta, GA</p>
                    <p><FiPhoneCall className='ic' /> +1(404)988-5880</p>
                    <p><AiOutlineMail className='ic' /> coatsctyler@gmail.com</p>
                </div>
                <div className='contact-form-div'>
                    <form onSubmit={handleSubmit} className="form">
                    <input
                            id="name"
                            type="name"
                            name="name"
                            placeholder='Enter Name'
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder='Enter Email'
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact