import { useState } from 'react';
import Modal from '../Modal';
import './index.scss';


const Cookies = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='container cookie-page'>
            <div className='text-zone'>
                <button className='openModalBtn' onClick={() => {setShowModal(true)}}>Hello</button>
                {showModal && <Modal closeModal={setShowModal}/>}
            </div>
        </div>
    )
}

export default Cookies;