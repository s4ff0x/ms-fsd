import { TextStyled } from "shared/ui";
import { IUser } from "../../model";
import { Avatar } from "../avatar";
import { UserInfoStyled } from "./styles";

export type TUserInfoProps = Pick<IUser, "photoURL" | "displayName" | "email">;

export const UserInfo = ({ photoURL, displayName, email }: TUserInfoProps) => {
  return (
    <UserInfoStyled>
      <Avatar photoURL={photoURL} />
      <TextStyled size={"2"} ellipsis boldness={"5"}>
        {email}
      </TextStyled>
      <TextStyled size={"2"} ellipsis boldness={"5"}>
        {displayName}
      </TextStyled>
    </UserInfoStyled>
  );
};
