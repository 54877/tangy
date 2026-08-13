import type {
  LoadingInstance,
  LoadingListener,
  LoadingManager,
  LoadingOptions,
  LoadingScope,
  LoadingStartOptions,
} from "../../types/loadingType";

const DEFAULT_MIN_DURATION = 800;

class LoadingInstanceImpl implements LoadingInstance {
  private loading = false;

  private stopping = false;

  private startedAt = 0;

  private currentMinDuration = 0;

  private timer: ReturnType<typeof setTimeout> | null = null;

  private readonly listeners = new Set<LoadingListener>();

  private readonly options: LoadingOptions;

  private stopResolver: (() => void) | null = null;

  constructor(options: LoadingOptions) {
    this.options = options;
  }

  start(options?: LoadingStartOptions) {
    if (this.loading || this.stopping) {
      return;
    }

    this.clearTimer();

    this.loading = true;

    this.startedAt = Date.now();

    this.currentMinDuration =
      options?.minDuration ?? this.options.minDuration ?? DEFAULT_MIN_DURATION;

    this.notify();
  }

  stop(): Promise<void> {
    if (!this.loading || this.stopping) {
      return Promise.resolve();
    }

    this.stopping = true;

    const elapsed = Date.now() - this.startedAt;

    const remaining = Math.max(this.currentMinDuration - elapsed, 0);

    return new Promise((resolve) => {
      this.stopResolver = resolve;

      if (remaining === 0) {
        this.finish();
        return;
      }

      this.timer = setTimeout(() => {
        this.finish();
      }, remaining);
    });
  }

  isLoading() {
    return this.loading;
  }

  subscribe(listener: LoadingListener) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private finish() {
    this.clearTimer();

    if (!this.loading) {
      return;
    }

    this.loading = false;
    this.stopping = false;

    this.notify();

    this.stopResolver?.();
    this.stopResolver = null;
  }

  private notify() {
    const state = {
      isLoading: this.loading,
    };

    this.listeners.forEach((listener) => {
      listener(state);
    });
  }

  private clearTimer() {
    if (this.timer === null) {
      return;
    }

    clearTimeout(this.timer);
    this.timer = null;
  }
}

const createLoadingScope = (
  count: number,
  options: LoadingOptions,
): LoadingScope => {
  const instances = Array.from(
    { length: count },
    () => new LoadingInstanceImpl(options),
  );

  return (index: number) => {
    if (!Number.isInteger(index) || index < 0 || index >= instances.length) {
      throw new Error(
        `Loading index ${index} is out of range. ` +
          `Available loading count: ${instances.length}`,
      );
    }

    return instances[index];
  };
};

export const createLoadingManager = (
  count: number,
  options: LoadingOptions = {},
): LoadingManager => {
  if (!Number.isInteger(count) || count <= 0) {
    throw new Error("Loading count must be a positive integer.");
  }

  return {
    createScope() {
      return createLoadingScope(count, options);
    },
  };
};
