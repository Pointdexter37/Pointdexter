"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function Avatar() {
  const imgRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);

  const handlePointerDown = useCallback(
    (e) => {
      setDragging(true);
      setShowHint(false);
      setStartPos({
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
      });
      e.target.setPointerCapture(e.pointerId);
    },
    [pos]
  );

  const handlePointerMove = useCallback(
    (e) => {
      if (!dragging) return;
      setPos({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    },
    [dragging, startPos]
  );

  const handlePointerUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Snap back with spring animation
  useEffect(() => {
    if (!dragging && (pos.x !== 0 || pos.y !== 0)) {
      const timeout = setTimeout(() => {
        setPos({ x: 0, y: 0 });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [dragging, pos]);

  return (
    <div className="avatar-container">
      {showHint && (
        <>
          <span className="drag-hint">drag me</span>
          <span className="drag-hint-arrow">↓</span>
        </>
      )}
      <img
        ref={imgRef}
        src="/avatar.jpg"
        alt="Monikanto Kurmi"
        className="avatar-img"
        draggable={false}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: dragging ? "none" : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          willChange: dragging ? "transform" : "auto",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      />
    </div>
  );
}
