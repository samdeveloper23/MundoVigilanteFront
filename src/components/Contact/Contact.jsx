import Logo from '../Logo/Logo';

import './Contact.css'

const Contact = () => {
    return (
        <div className='register-card'>
            <div className='logo-container'>
                <div className='logo-image'>
                    <Logo />
                </div>
            </div> 
            <div>
                <h2 className='contact-title'>Sobre nosotros</h2>
                <p className='info-title'>
                    MundoVigilante es una propuesta donde blindar un espacio para esos grandes profesionales olbidados.
                </p>
                <h3 className='contact-h3'>Contacto</h3>
                <p className='contact-info'>Email: sam.developer.23@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;
