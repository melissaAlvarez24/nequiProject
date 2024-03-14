import {TOptions} from '../../components/shared/CustomSelect/types';

interface DataLoginC {
  document: string;
  selectedOption: TOptions | null;
  isLoading: boolean;
}

export interface TLoginC {
  data: DataLoginC;
  handleChangeDocument: (value: string) => void;
  handleSelect: (option: any) => void;
  handleSubmit: () => void;
}

export interface TTypeDocument {
  label: string;
  value: string;
}
