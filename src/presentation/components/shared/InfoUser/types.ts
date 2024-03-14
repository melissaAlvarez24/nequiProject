export interface TInfoUser {
  data: TData;
  calculateValue: (Percentage: number, total: number) => number;
}

interface TData {
  width: number;
  height: number;
  moneyAvailable: number;
  totalMoney: number;
}
