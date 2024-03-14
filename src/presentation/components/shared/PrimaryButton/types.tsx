export interface PrimaryButtonC {
  text: string;
  isLoading: boolean;
  onPressF?: (value: React.SetStateAction<any>) => void;
  onLongPressF?: (value: React.SetStateAction<any>) => void;
}
