import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./modal.css";

const Modal: React.FC = () => {
  const posts = useSelector((state: any) => state.post_reducer.posts);
  var active: boolean = useSelector((state: any) => state.modal_reducer.active);
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

  const handleInput = (post: object) => {
    dispatch({ type: "ADD_POST", payload: post });
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => (active = false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          value={posts.content}
          placeholder="input content"
        />
        <button className="submit_modal" onClick={() => handleInput(post)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Modal;
