import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType} from "../types/types";

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
  const handleButton = (post:PostType) => {
    dispatch({ type: "SET_ACTIVE_EDIT", payload: {active: true , id: post.id} })
  }
  return (
    <div className="tasks_area">
      <span className="title">
        {days[date.getDay()] + ", " + date.getDate()} Декабря
        <button
          className="modal_btn"
          onClick={() => localStorage.setItem('posts',JSON.stringify(posts))}
        >
          {" "}
          +
        </button>
      </span>

      <div className="tasks">
        {posts.length ? (
          posts.map((post) => (
            <div className="task">
              <span key={post.id.toString() + "_main"}>{post.content}</span>
              <div className="post_btns">
                <button
                  className="edit_btn"
                  onClick={() => handleButton(post)}
                  style={{ marginRight: "5px" }}
                >
                  <img
                    alt="ups..."
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
                    alt="ups..."
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
