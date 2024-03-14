export interface TActionsFloatsButtonC {
  handlePress: (buttonId: number) => void;
  closeSession: () => Promise<void>
  data: TData;
}

interface TData {
  lastPressed: number;
  actions: TActions[];
}

export interface TActions {
  id: number;
  iconName: string;
  label: string;
  action?: () => void;
}
