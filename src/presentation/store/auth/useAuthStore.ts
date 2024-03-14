import {create} from 'zustand';
import {AuthStatus} from '../../../interfaces';
import {authLogin, checkStatus} from '../../../actions/auth/auth';
import {UserEntity} from '../../../domain/entities/auth/user';
import {StorageAdapter} from '../../../config/adapters/async-storage';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  login: (
    documentType: string,
    numberDocument: string,
  ) => Promise<boolean | {title: string; description: string}>;
  checkStatus: () => Promise<void>;
  closeSession: () => Promise<void>;
  user?: UserEntity;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,
  login: async (documentType: string, numberDocument: string) => {
    const resp = authLogin(documentType, numberDocument);
    if (resp.title) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return resp;
    }
    await StorageAdapter.setItem('token', resp.token ? resp.token : '');
    set({status: 'authenticated', token: resp.token, user: resp.user});
    return true;
  },
  closeSession: async () => {
    await StorageAdapter.deleteItem('token');
    set({status: 'unauthenticated', token: undefined, user: undefined});
  },
  checkStatus: async () => {
    const resp = await checkStatus();
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return;
    }
    await StorageAdapter.setItem('token', resp.token ? resp.token : '');
    set({status: 'authenticated', token: resp.token, user: resp.user});
  },
}));
