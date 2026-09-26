import React, { useRef } from "react";

const MIN_WIDTH = 240;
const MAX_WIDTH = 480;
const DEFAULT_WIDTH = 320;

const SidebarResizeHandle = ({ onResize }) => {
  const dragging = useRef(false);
  const latest = useRef(DEFAULT_WIDTH);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, e.clientX));
    latest.current = next;
    onResize(next);
  };

  const onPointerUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    e.currentTarget.releasePointerCapture(e.pointerId);
    localStorage.setItem("sidebarWidth", String(latest.current));
  };

  const onDoubleClick = () => {
    latest.current = DEFAULT_WIDTH;
    onResize(DEFAULT_WIDTH);
    localStorage.setItem("sidebarWidth", String(DEFAULT_WIDTH));
  };

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Redimensionner la barre latérale (double-clic pour réinitialiser)"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onDoubleClick={onDoubleClick}
      className="hidden lg:flex items-center justify-center w-[6px] cursor-col-resize group bg-transparent hover:bg-accent/10 active:bg-accent/20 transition-colors"
    >
      <span className="w-px h-8 bg-line group-hover:bg-accent transition-colors" />
    </div>
  );
};

export { MIN_WIDTH, MAX_WIDTH, DEFAULT_WIDTH };
export default SidebarResizeHandle;