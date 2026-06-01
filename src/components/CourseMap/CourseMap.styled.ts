import styled from "styled-components";
import { media } from "../../styles/helper/media";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: contain;
  display: block;
  ${media.sm} {
    min-height: 452px;
  }
`;

export const MapContainer = styled.div`
  padding: 16px 0;
`;

export const Location = styled(LocationOnIcon)`
  ${({ theme }) => ({
    color: theme.colors.secondary[500],
  })}

  && {
    width: 32px;
    height: 32px;
  }
`;
