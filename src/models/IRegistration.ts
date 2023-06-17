import { Sex } from "./Sex";

export interface IRegistration {
  email: string;
  userName: string;
  sex: Sex;
  password: string;
  confirmPassword: string;
}
