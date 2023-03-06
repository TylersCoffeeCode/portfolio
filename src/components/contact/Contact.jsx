import './Contact.css'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = ({id}) => {
  return (
    <div className='contact-page-ctn' id={id}>
        <div className='contact-div'>
            <div className='contact-title-div'>
                <h2>Contact Me</h2>
                <h3>Let's grab a virtual coffee and make some magic happen!</h3>
                <p style={{color: 'white'}}>Atlanta, GA</p>
                <p><FiPhoneCall className='ic'/> +1(404)988-5880</p>
                <p><AiOutlineMail className='ic'/> coatsctyler@gmail.com</p>
            </div>
            <div className='contact-form-div'>
                <form action="onSubmit">
                    <input type="text" name="name" id="name" placeholder='Full Name'/>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <input type="tel" name="phone" id="phone" placeholder='Phone'/>
                    <textarea type="text" name="text" id="text" placeholder='Message'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact