export interface Loans {
  data: TData;
  handleSearchText: (value: string) => void;
  handleSelect: (option: any) => void;
}

interface TData {
  dataShow: TDataDummy[];
  searchText: string;
  width: number;
  options: TTypeDocument[];
  selectedOption: TTypeDocument | null;
}

export interface TDataDummy {
  iconName: string;
  backgroundColor: string;
  title: string;
  description: string;
  state: TState;
}

export type TState = 'pending' | 'active' | 'rejected';

export interface TTypeDocument {
  label: string;
  value: string;
}
