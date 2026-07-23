import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { SpanType } from "../../styles/components/span";
import { media } from "../../styles/helper/media";

export const CardBorder = styled.div`
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  margin: 12px 0;
  box-shadow: 0px 7px 29px 0px #64646f33;
  ${media.sm} {
    margin: 0;
  }
`;
export const Start = styled(StarIcon)`
  color: #ffc107;
  && {
    width: 20px;
    height: 20px;
  }
`;

export const Content = styled(SpanType)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  position: relative;
`;

export const Card = styled.div`
  padding: 16px 0;
  ${media.sm} {
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  object-fit: cover;
  border-radius: 1000px;
`;
