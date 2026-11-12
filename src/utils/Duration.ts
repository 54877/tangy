export const formatDuration = (value: string) => {
  const seconds = Number(value);
  if (!Number.isFinite(seconds) || seconds < 0) return value || "—";
  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  return `${minutes} 分 ${remainingSeconds} 秒`;
};
