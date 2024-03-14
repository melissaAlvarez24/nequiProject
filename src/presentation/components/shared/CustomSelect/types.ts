export interface TCustomSelectC {
  data: TDataCustomSelect;
  handleSelect: (item: any) => void;
  toggleModal: () => void;
}

export interface TDataCustomSelect {
  modalVisible: boolean;
  placeholder: string;
  options: TOptions[];
  selectedOption: TOptions | null;
  width?: number;
  backgroundColor?: string;
}

export interface TCustomSelectV {
  options: TOptions[];
  width?: number;
  backgroundColor?: string;
  onSelect: (option: any) => void;
  placeholder: string;
  selectedOption: TOptions | null;
}

export interface TOptions {
  label: string;
  value: string;
}
