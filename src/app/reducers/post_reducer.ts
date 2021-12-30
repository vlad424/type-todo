import { ReduxStateTypes, TodoActions } from "../../types/types";

export const initialState: ReduxStateTypes = {
  posts: [
    { content: "test", id: "none_id" },
    { content: "test1", id: "none_id1" },
  ],
};

const ADD_POST = "ADD_POST";

export const post_reducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

// case "EDIT_POST":
//     return {...state, posts: state.posts.map(post => {
//         if(post.id === action.payload.id) {
//             return {...post, content: action.payload.content }
//         }
//         else {
//             return post
//         }
//     })}
