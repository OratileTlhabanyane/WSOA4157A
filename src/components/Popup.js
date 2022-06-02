import React from 'react';
import '../styles/Popup.css'

function Popup(props) {
  
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner" >
        <button type='button' className="close-btn" onClick={() => this.props.setTrigger(false)} >close
            </button>
            { props.children}
        </div>
    </div>

  ) : "";
  
}
export default Popup;