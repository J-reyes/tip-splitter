// Helper function for formatting tips into decimals
export function formatTipPercentage(tipPercentage: number): number {
  return tipPercentage / 100
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
