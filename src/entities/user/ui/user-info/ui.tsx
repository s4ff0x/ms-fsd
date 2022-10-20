import { TextStyled } from "shared/ui";
import { IUser } from "../../model";
import { Avatar } from "../avatar";
import { UserInfoStyled } from "./styles";

export type TUserInfoProps = Pick<IUser, "photoURL" | "displayName" | "email">;

export const UserInfo = ({ photoURL, displayName, email }: TUserInfoProps) => {
  return (
    <UserInfoStyled>
      <Avatar photoURL={photoURL} />
      <TextStyled size={"3"} ellipsis>
        {email}
      </TextStyled>
      <TextStyled size={"3"} ellipsis>
        {displayName}
      </TextStyled>
    </UserInfoStyled>
  );
};
