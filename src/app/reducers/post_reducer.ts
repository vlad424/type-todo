import { ReduxStateTypes, TodoActions } from "../../types/types";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST"

export const initialState: ReduxStateTypes = {
  posts: [
    { content: "test", id: 0 },
    { content: "test1", id: 1 },
    { content: "test1", id: 2 },
    { content: "test1", id: 3 },
    { content: "test1", id: 4 },
  ],
  modal_active: false,
};

export const post_reducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {...state, posts: [state.posts.filter((post) => post.id == action.payload)]}
    default:
      return state;
  }
};

// case EDIT_POST:
//   return {
//     ...state,
//     posts: state.posts.map((post) => {
//       if (post.id === action.payload.id) {
//         return { ...post, content: action.payload.content };
//       } else {
//         return post;
//       }
//     }),
//   };