import { MetricCard, MetricLabel, MetricValue } from "./Metirc.styled";

export function Metric({
  label,
  value,
  highlight = false,
}: {
  readonly label: string;
  readonly value: string;
  readonly highlight?: boolean;
}) {
  return (
    <MetricCard>
      <MetricLabel $size="xs" $shade={400}>
        {label}
      </MetricLabel>
      <MetricValue
        $type="label"
        $size="lg"
        $color={highlight ? "success" : "gray"}
        $shade={highlight ? 700 : 800}
      >
        {value}
      </MetricValue>
    </MetricCard>
  );
}
