import { useEffect, useState } from "react";

export const useTypewriter = (words, loop = false, speed = 120) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      if (loop) setIndex(0);
      return;
    }

    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      if (!deleting) {
        if (subIndex < words[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setDeleting(false);
          setIndex(index + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, loop, speed]);

  return text;
};
