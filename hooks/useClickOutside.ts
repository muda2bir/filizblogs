import { useEffect, useRef } from "react";

export const useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLElement>(null);

  useEffect(() => {
    function assertIsNode(e: EventTarget | null): asserts e is Node {
      if (!e || !("nodeType" in e)) {
        throw new Error(`Node expected`);
      }
    }

    let insiderHandler = ({ target }: MouseEvent) => {
      assertIsNode(target);
      if (domNode.current) {
        if (!domNode.current.contains(target)) {
          handler();
        }
      }
    };

    document.addEventListener("mousedown", insiderHandler);
    return () => {
      document.removeEventListener("mousedown", insiderHandler);
    };
  });

  return domNode;
};
