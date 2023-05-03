export function formatPercentage(value: number | undefined) {
  return new Intl.NumberFormat("en", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value || 0);
}

export function msToMinSec(ms: number | undefined): string {
  if (ms == undefined) {
    return ""
  }
  var mins = Math.floor(ms / 60000);
  var secs = ((ms % 60000) / 1000).toFixed(0);
  return `${mins}:${Number(secs) < 10 ? 0 : ""}${secs}`;
}
