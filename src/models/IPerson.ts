import { Gender } from "./Gender";

export interface IPerson {
  id: number;
  team_id: number;
  full_name: string;
  email: string;
  password: string;
  balance: number;
  gender: Gender;
}
