import React, { Children, ReactNode } from "react";
import { LinkStyled, TextStyled } from "shared/ui/text";
import {
  ContentStyled,
  HeadingStyled,
  ScrollableSectionStyled,
} from "./styles";

export interface ScrollableSectionProps {
  link?: {
    text: string;
    to: string;
  };
  onTitleClick?: () => void;
  title: string;
  children: ReactNode;
  emptyPlaceholder: string;
}

export const ScrollableSection = ({
  link,
  children,
  title,
  emptyPlaceholder,
  onTitleClick,
}: ScrollableSectionProps) => {
  return (
    <ScrollableSectionStyled>
      <HeadingStyled>
        <TextStyled size={"2"} boldness={"2"} onClick={onTitleClick}>
          {title}
        </TextStyled>
        {link && (
          <LinkStyled to={link.to}>
            <TextStyled size={"1"} onClick={onTitleClick}>
              {link.text}
            </TextStyled>
          </LinkStyled>
        )}
      </HeadingStyled>
      <ContentStyled>{children}</ContentStyled>
      {Children.toArray(children).length === 0 && (
        <TextStyled brightness={"2"}>{emptyPlaceholder}</TextStyled>
      )}
    </ScrollableSectionStyled>
  );
};
