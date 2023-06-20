import { Gender } from "./Gender";

export interface IPerson {
  id: number;
  teamID: number;
  fullName: string;
  email: string;
  password: string;
  balance: number;
  gender: Gender;
}
