import styled from "styled-components";
import { media } from "../../styles/helper/media";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FlexType } from "../../styles/components/flex";

export const Img = styled.img`
  width: 100%;
  max-height: 240px;
  object-fit: contain;
  display: block;
  ${media.sm} {
    max-height: 452px;
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

export const FlexTypeMap = styled(FlexType)`
  width: 100%;
  flex: 1;
  min-width: 0;
`;
