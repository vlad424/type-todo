import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../types/types";

const SideBar: React.FC = () => {
  const posts: Array<PostType> = useSelector((state: any) => state.post_reducer.posts);

  return (
    <div className="side_bar">
			<span className="title">Ваши задачи</span>
      {posts.map((post, index) => (
        <span className="left_task" key={index}>
          {post.content}
        </span>
      ))}
    </div>
  );
};

//post.id.toString() + "_sideBar"

export default SideBar;
