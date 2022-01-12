import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../../types/types";

const DeletePost = () => {
  return (
    <button className="delete_btn" onClick={() => console.log()}>
      <img src="https://img.icons8.com/material-outlined/24/000000/delete-view.png" style={{width: "20px", height:"20px", cursor:"pointer"}}/>
    </button>
  );
};

export default DeletePost;