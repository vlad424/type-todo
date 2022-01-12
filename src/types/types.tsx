export interface PostType {
  content: string;
  id: number;
}
interface PayloadEditModal {
  active: boolean;
  id: number;
}
interface PayloadEditPost {
  content: string;
  id: number;
}
export interface ReduxStateTypes {
  posts: PostType[];
  cache_id: number;
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
export interface EditModal {
  type: string;
  payload: PayloadEditModal;
}
interface EditPostAction {
  type: string;
  payload: any;
}
interface SetModalActive {
  type: string;
  payload: boolean;
}

export type TodoActions = AddPostAction | SetModalActive | DeletePostAction | EditPostAction