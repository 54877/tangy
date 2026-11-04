import styled from "styled-components";
import { ButtonOutlined } from "../../components/Button/Button";
import { Flex } from "../../components/Input/Input.styled";
import { Heading, SpanType } from "../../styles/components/span";

export const DialogTitle = styled(Flex)`
  width: auto;
  flex-wrap: wrap;
`;

export const CourseHeader = styled.section`
  display: grid;
  grid-template-columns: minmax(170px, 224px) minmax(0, 1fr);
  align-items: center;
  gap: 24px;
  min-height: 190px;
  padding: 16px;
  border-radius: 12px;
  background: #e8f0ed;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const CourseCover = styled.img`
  display: block;
  width: 100%;
  height: 158px;
  object-fit: cover;
  border-radius: 8px;
  background: #d5e4dd;
`;

export const CoverFallback = styled(SpanType)`
  display: grid;
  place-items: center;
  height: 158px;
  border-radius: 8px;
  background: #d5e4dd;
`;

export const StatusBadge = styled(SpanType)`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 12px;
  padding: 6px 0;
  border-radius: 20px;
  background: "#fff4df";
`;

export const SummaryTitle = styled(Heading)`
  margin: 0 0 10px;
`;

export const Instructor = styled(SpanType)`
  display: block;
  margin-bottom: 12px;
`;

export const Tags = styled(Flex)`
  width: auto;
  flex-wrap: wrap;
`;

export const Tag = styled(SpanType)`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  background: white;
  white-space: nowrap;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
`;

export const CourseContent = styled(SpanType)`
  min-height: 72px;
  max-height: 180px;
  overflow: auto;
  padding: 16px;
  border: 1px solid #edf0f3;
  border-radius: 9px;
  background: #fafbfc;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const CourseVideo = styled.video`
  width: 100%;
  max-height: 240px;
  border-radius: 8px;
  background: #111827;
`;

export const DialogFooter = styled(Flex)`
  padding-top: 16px;
  border-top: 1px solid #e9edf2;
`;

export const ReviewNotice = styled(Flex)`
  width: auto;
  max-width: 48%;
  flex-wrap: wrap;
  padding: 10px 14px;
  border-radius: 9px;
  background: #f5f6f7;
  @media (max-width: 868px) {
    max-width: 100%;
  }
`;

export const FooterActions = styled(Flex)`
  width: auto;

  @media (max-width: 560px) {
    flex-wrap: wrap;
  }
`;

export const RejectButton = styled(ButtonOutlined)`
  color: ${({ theme }) => theme.colors.danger[700]};
  border-color: ${({ theme }) => theme.colors.danger[300]};
`;
