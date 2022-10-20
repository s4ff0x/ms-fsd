import { IUser } from "../../model";
import { AvatarStyled } from "./styles";

export type AvatarProps = Pick<IUser, "photoURL">;

export const Avatar = ({ photoURL }: AvatarProps) => {
  return (
    <AvatarStyled>
      <img src={photoURL || ""} alt={"avatar"} />
    </AvatarStyled>
  );
};
