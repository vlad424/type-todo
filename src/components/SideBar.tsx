import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../types/types";

const SideBar: React.FC = () => {
  const posts: Array<PostType> = useSelector((state: any) => state.posts);

  return (
    <div className="side_bar">
			<span className="title">Ваши задачи</span>
      {posts.map((post) => (
        <span className="left_task" key={post.id.toString()}>
          {post.content}
        </span>
      ))}
    </div>
  );
};

export default SideBar;
