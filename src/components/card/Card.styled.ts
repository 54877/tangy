import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FlexType } from "../../styles/components/flex";
import { media } from "../../styles/helper/media";
import { Heading } from "../../styles/components/span";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;

  ${media.md} {
    min-width: 250px;
  }
`;
export const Start = styled(StarIcon)`
  color: #ffc107;
  && {
    width: 20px;
    height: 20px;
  }
`;

export const Icon = styled(PersonOutlinedIcon)`
  ${({ theme }) => ({
    color: theme.colors.gray[700],
  })}
  && {
    width: 20px;
    height: 20px;
  }
`;

export const FlexEnd = styled(FlexType)`
  margin-bottom: 12px;
  ${media.md} {
    margin-bottom: 0;
  }
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCard = styled(FlexType)`
  width: 100%;
  ${media.md} {
    flex: 1;
  }
`;

export const TitleHeading = styled(Heading)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  position: relative;
`;

export const FlexTypeCard = styled(FlexType)<{
  $width?: string;
  $xslgWidth?: string;
  $lgWidth?: string;
}>`
  ${media.xsLg} {
    max-width: ${({ $xslgWidth }) => $xslgWidth};
  }
  ${media.lg} {
    max-width: ${({ $lgWidth }) => $lgWidth};
  }
  width: 100%;
  max-width: ${({ $width }) => $width ?? "100%"};
`;
