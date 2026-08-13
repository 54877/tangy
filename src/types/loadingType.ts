//全域預設最短顯示時間
export interface LoadingOptions {
  minDuration?: number;
}

//覆寫這一次 Loading 的最短顯示時間
export interface LoadingStartOptions {
  minDuration?: number;
}

export interface LoadingState {
  isLoading: boolean;
}

export type LoadingListener = (state: LoadingState) => void;

export interface LoadingInstance {
  start: (options?: LoadingStartOptions) => void;
  stop: () => Promise<void>;

  isLoading: () => boolean;

  subscribe: (listener: LoadingListener) => () => void;
}

export type LoadingScope = (index: number) => LoadingInstance;

export interface LoadingManager {
  createScope: () => LoadingScope;
}

export interface LoadingProviderOptions extends LoadingOptions {
  count: number;
}
