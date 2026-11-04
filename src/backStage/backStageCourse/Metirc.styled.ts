import styled from "styled-components";
import { SpanType } from "../../styles/components/span";

export const MetricCard = styled.div`
  min-width: 0;
  padding: 14px 16px;
  border-radius: 10px;
  background: #f7f9fa;
`;

export const MetricLabel = styled(SpanType)`
  display: block;
`;

export const MetricValue = styled(SpanType)`
  display: block;
  overflow-wrap: anywhere;
`;
