export interface TDataDummy {
  iconName: string;
  backgroundColor: string;
  title: string;
  description: string;
  state: string;
}

export type TState = 'pending' | 'active' | 'rejected';