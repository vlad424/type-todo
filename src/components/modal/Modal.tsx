import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './modal.css'

const Modal: React.FC = () => {
  var active = useState()
  //active = useSelector((state:any) => state.post_reducer.modal_active)
  const dispatch = useDispatch()

  return (
    <div className= {active ? "modal active" : "modal"} onClick={() => dispatch({type: "SET_ACTIVE", payload: false})}>
      {active = useSelector((state:any) => state.post_reducer.modal_active)}
      <div className="modal_content" onClick = {e => e.stopPropagation()}>
        <input 
          placeholder="Enter task"
          type="text" 
          className="modal_input" 
        />
      </div>
    </div>
  );
};

export default Modal;
