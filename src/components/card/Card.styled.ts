import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { FlexType } from "../../styles/components/flex";
import { media } from "../../styles/helper/media";

export const Img = styled.img`
  width: 100%;
  min-height: 240px;
  object-fit: fill;
  display: block;
  border-radius: 8px;

  ${media.md} {
    min-height: 0;
    min-width: 0;
    width: 267px;
    height: 178px;
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
    min-height: 178px;
  }
`;
