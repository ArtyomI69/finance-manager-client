import { IPerson } from "./IPerson";

export interface IProfile extends Omit<IPerson, "balance" | "team_id" | "id"> {
  confirmPassword: string;
}
