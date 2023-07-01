import { Gender } from "./Gender";

export interface IInvitation {
  personFrom: {
    full_name: string;
    gender: Gender;
    team: { name: string };
  };
}
