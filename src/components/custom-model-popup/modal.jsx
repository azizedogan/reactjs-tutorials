export default function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || 'Modal'} className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    {/* <div> */}
                    <span onClick={onClose} 
                        className="close-modal-icon">&times;</span>
                    {/* </div> */}
                    <h2>{ header ? header : 'Header' }</h2>
                </div>
                <div className="modal-body">
                    { 
                        body ? body : (
                            <div>
                                <p>This is our Modal Body</p>
                            </div> )
                    }
                </div>
                <div className="modal-footer">
                    { footer ? footer : <h2>Footer</h2> }
                </div>
            </div>
        </div>    
    )
}