import { useState } from 'react';
import Modal from '../Modal';
import './index.scss';


const Cookies = () => {

    // trying to create different buttons that open modals for the different category of cookies 
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='container cookie-page'>
            <div className='text-zone'>
                <button className='openModalBtn' onClick={() => {setShowModal(true)}}>Wedding</button>
                {showModal && <Modal closeModal={setShowModal}/>}
            </div>

        </div>
    )
}

export default Cookies;