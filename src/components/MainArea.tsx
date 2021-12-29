import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../types/types";

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
  const posts: Array<PostType> = useSelector((state: any) => state.posts);

  return (
    <div className="tasks_area">
      <span className="title">
        {days[date.getDay()] + ", " + date.getDay()} Декабря
      </span>
      {posts.length ? (
        posts.map((post) => <span>{post.content}</span>)
      ) : (
        <span>На сегодня дела отсутствуют</span>
      )}
    </div>
  );
};

export default MainArea;
