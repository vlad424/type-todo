import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "../../types/types";
import "./modal_edit.css";

const Modal: React.FC = () => {
  const [post, setPost] = useState<PostType>({content:"", id: 0});
  const active = useSelector((state: any) => state.modal_reducer_edit.modal_edit_active);
  const dispatch = useDispatch();

  const handleInput = (post: PostType) => {
    dispatch({ type: "ADD_POST", payload: post });
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => dispatch({ type: "SET_ACTIVE_EDIT", payload: false })}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input
          placeholder="Edit task"
          type="text"
          className="modal_input"
          onChange={e => setPost({ ...post, content: e.target.value })}
          value={post.content}
        />
        <button className="modal_button" onClick={() => dispatch({type: "ADD_POST", payload: "null"})}>
          +
        </button>
      </div>
    </div>
  );
};

export default Modal;
