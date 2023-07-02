import { Gender } from "./Gender";

export interface IInvitation {
  id: number;
  personFrom: {
    full_name: string;
    gender: Gender;
    team: { name: string };
  };
}
