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
interface SetModalActive {
  type: string;
  payload: boolean;
}

export type TodoActions = AddPostAction | SetModalActive