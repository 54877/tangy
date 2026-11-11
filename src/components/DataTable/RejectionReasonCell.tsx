export const renderRejectionReasonCell = (reason?: string | null) => (
  <span className="course-rejection-reason">{reason || "—"}</span>
);
