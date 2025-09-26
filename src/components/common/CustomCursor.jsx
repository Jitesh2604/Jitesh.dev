import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className =
      "custom-cursor fixed w-6 h-6 rounded-full border border-purple-400 pointer-events-none z-[9999]";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX - 12 + "px";
      cursor.style.top = e.clientY - 12 + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
};

export default CustomCursor;
