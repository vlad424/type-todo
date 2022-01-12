import { ReduxStateTypes, TodoActions } from "../../types/types";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST"

export const initialState: ReduxStateTypes = {
  posts: [
    { content: "1", id: 0 },
    { content: "2", id: 1 },
    { content: "3", id: 2 },
    { content: "4", id: 3 },
    { content: "5", id: 4 },
  ],
  cache_id: -1,
  modal_active: false,
  modal_edit_active: false
};

export const post_reducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload]};
    case DELETE_POST:
      return {...state, posts: [...state.posts.filter((post) => post.id !== action.payload)]}
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return { ...post, content: action.payload.content};
          } else {
            return post;
          }
        }),
      };    
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