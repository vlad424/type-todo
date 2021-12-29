export interface PostType {
  content: string;
  id: string;
}
export interface ReduxStateTypes {
  posts: PostType[];
}
interface AddPostAction {
  type: string;
  payload: object;
}

export type TodoActions = AddPostAction