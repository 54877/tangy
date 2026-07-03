import { useState } from "react";

type MenuState<K extends string> = {
  key: K | null;
  ref: HTMLElement | null;
};

export const useMenu = <K extends string>() => {
  const [menuState, setMenuState] = useState<MenuState<K>>({
    key: null,
    ref: null,
  });

  const isOpen = Boolean(menuState.ref);
  const openClick = (key: K) => (event: React.MouseEvent<HTMLElement>) => {
    const el = event.currentTarget;

    setMenuState((prev) => {
      if (prev.key === key && prev.ref === el) {
        return { key: null, ref: null };
      }

      return { key, ref: el };
    });
  };

  const closeClick = (e?: globalThis.MouseEvent | TouchEvent) => {
    if (e) {
      const target = e.target as Node;

      if (menuState.ref?.contains(target)) return;
      setMenuState({ key: null, ref: null });
    }

    setMenuState({ key: null, ref: null });
  };

  return {
    ref: menuState.ref,
    activeKey: menuState.key,
    openClick,
    closeClick,
    isOpen,
  };
};
