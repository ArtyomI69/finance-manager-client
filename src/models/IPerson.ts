import { Gender } from "./Gender";
import { Role } from "./Role";

export interface IPerson {
  id: number;
  team_id: number;
  full_name: string;
  email: string;
  password: string;
  balance: number;
  gender: Gender;
  role: Role;
}
