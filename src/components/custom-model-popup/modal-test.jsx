import { useState } from "react";
import Modal from "./modal";
import './modal.css';

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div className="popup">
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && (
                <Modal 
                    id={"custom-id"}
                    onClose={onClose}
                    header={<div>Customized Header</div>}
                    body={<div>Customized Body</div>} 
                    footer={<div>Customized Footer</div>} />
                )
            }
        </div>
    );
}