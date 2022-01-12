import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "../../types/types";
import "./modal.css";

const Modal: React.FC = () => {
  var id = 5;
  const [post, setPost] = useState<PostType>({content: "", id: id});
  const active = useSelector((state: any) => state.modal_reducer.modal_active);
  const dispatch = useDispatch();

  const handleInput = (post: PostType) => {
    ++id
    dispatch({ type: "ADD_POST", payload: {post, id}});
  };
  
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => dispatch({ type: "SET_ACTIVE", payload: false })}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input
          placeholder="Enter task"
          type="text"
          className="modal_input"
          onChange={e => setPost({...post, content: e.target.value})}
          value={post.content}
        />
        <button className="modal_button" onClick={() => handleInput(post)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Modal;
