import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "../types/types";
import Modal from "./modal/Modal";

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

  return (
    <div className="tasks_area">
      <span className="title">
        {days[date.getDay()] + ", " + date.getDay()} Декабря
        <button className="modal_btn" onClick={ () =>console.log("its side menu (r)")}> + </button>
      </span>

      <div className="posts">
        {posts.length ? (
          posts.map((post) => <span>{post.content}</span>)
        ) : (
          <span>На сегодня дела отсутствуют</span>
        )}
        <button className="modal_btn" onClick={() => console.log("its modal menu")}>
          +
        </button>
      </div>
    </div>
  );
};

export default MainArea;
