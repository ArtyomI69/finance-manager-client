import { Sex } from "./Sex";

export interface IProfile {
  email: string;
  userName: string;
  sex: Sex;
  password: string;
  confirmPassword: string;
}
