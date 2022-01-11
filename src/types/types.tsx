export interface PostType {
  content: string;
  id: number;
}
interface PayloadEditPost {
  id: number;
  content: string;
}
export interface ModalActive {
  active: boolean;
}
export interface ReduxStateTypes {
  posts: PostType[];
  modal_active: boolean;
  modal_edit_active: boolean;
}
interface AddPostAction {
  type: string;
  payload: object;
}
interface DeletePostAction {
  type: string;
  payload: number;
}
interface EditPostAction {
  type: string;
  payload: PayloadEditPost;
}
interface SetModalActive {
  type: string;
  payload: boolean;
}

export type TodoActions = AddPostAction | SetModalActive | DeletePostAction | EditPostAction