import { Gender } from "./Gender";

export interface IProfile {
  email: string;
  userName: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
}
