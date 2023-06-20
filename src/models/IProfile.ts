import { IPerson } from "./IPerson";

export interface IProfile extends Omit<IPerson, "balance" | "teamID" | "id"> {
  confirmPassword: string;
}
