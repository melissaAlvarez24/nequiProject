export interface TCustomButtomSVGC {
  svg: string;
  label: string;
  onPressF?: (value: React.SetStateAction<any>) => void;
  onLongPressF?: (value: React.SetStateAction<any>) => void;
}
