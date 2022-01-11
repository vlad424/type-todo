import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType, ReduxStateTypes } from "../types/types";
import DeletePost from "./buttons/DeletePost";
import EditPost from "./buttons/EditPost";

const MainArea: React.FC = () => {
  const date: any = new Date();
  const days = [
    "Воскресение",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const posts: Array<PostType> = useSelector(
    (state: any) => state.post_reducer.posts
  );
  const dispatch = useDispatch();
  const handleButton = () => {
    dispatch({type: "EDIT_POST", payload: days})
  }
  return (
    <div className="tasks_area">
      <span className="title">
        {days[date.getDay()] + ", " + date.getDate()} Декабря
        <button
          className="modal_btn"
          onClick={() => console.log("its side menu (r)")}
        >
          {" "}
          +
        </button>
      </span>

      <div className="tasks">
        {posts.length ? (
          posts.map((post, index) => (
            <div className="task">
              <span key={index}>{post.content}</span>
              <div className="post_btns">
                <button
                  className="edit_btn"
                  onClick={() => dispatch({ type: "SET_ACTIVE_EDIT", payload: true })}
                  style={{ marginRight: "5px" }}
                >
                  <img
                    src="https://img.icons8.com/fluency-systems-regular/50/000000/edit.png"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                </button>
                <button
                  className="delete_btn"
                  onClick={() =>
                    dispatch({ type: "DELETE_POST", payload: post.id })
                  }
                >
                  <img
                    src="https://img.icons8.com/material-outlined/24/000000/delete-view.png"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <span>На сегодня дела отсутствуют</span>
        )}
      </div>
      <button
        className="modal_btn"
        onClick={() => dispatch({ type: "SET_ACTIVE", payload: true })}
      >
        {" "}
        +
      </button>
    </div>
  );
};

//post.id.toString() + "_main"

export default MainArea;
