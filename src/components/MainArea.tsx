import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostType } from "../types/types";
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

  return (
    <div className="tasks_area">
      <span className="title">
        {days[date.getDay()] + ", " + date.getDay()} Декабря
        <button
          className="modal_btn"
          onClick={() => console.log("its side menu (r)")}
        > +
        </button>
      </span>

      <div className="tasks">
        {posts.length ? (
          posts.map((post) => (
            <div className="task">
              <span key={post.id.toString() + "_main"}>{post.content}</span>
              <div className="post_btns">
                <EditPost/>
                <DeletePost/>
              </div>
            </div>
          ))
        ) : (
          <span>На сегодня дела отсутствуют</span>
        )}
      </div>
      <button
        className="modal_btn"
        onClick={() => console.log("its modal menu")}
      > +
      </button>
    </div>
  );
};

export default MainArea;
