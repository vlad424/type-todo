import React from "react";

const DeletePost = () => {
  return (
    <button className="delete_btn" onClick={() => console.log("its delete button")}>
      <img src="https://img.icons8.com/material-outlined/24/000000/delete-view.png" style={{width: "20px", height:"20px", cursor:"pointer"}}/>
    </button>
  );
};

export default DeletePost;
