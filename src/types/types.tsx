export interface PostType {
  content: string;
  id: number;
}
export interface ModalActive {
  active: boolean;
}
export interface ReduxStateTypes {
  posts: PostType[];
  modal_active: boolean;
}
interface AddPostAction {
  type: string;
  payload: object;
}
interface DeletePostAction {
  type: string;
  payload: number;
}
interface SetModalActive {
  type: string;
  payload: boolean;
}

export type TodoActions = AddPostAction | SetModalActive | DeletePostAction