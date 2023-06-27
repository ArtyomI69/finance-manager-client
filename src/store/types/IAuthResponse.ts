import { Gender } from "../../models/Gender";
import { Role } from "../../models/Role";

export interface IAuthResponse {
  token: string;
  person: {
    id: number;
    full_name: string;
    email: string;
    balance: number;
    gender: Gender;
    role: Role;
    team: number | null;
  };
  error: string | null;
}
