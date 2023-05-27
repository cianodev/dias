import { useRef, useEffect } from "react";

function useDocumentTitle(title, prevailOnUnMount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnMount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnMount]
  );
}

export default useDocumentTitle;
