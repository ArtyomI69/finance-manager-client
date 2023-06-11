import { Gender } from "./Gender";

export interface IRegistration {
  email: string;
  userName: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
}
