import { useRef, useState } from 'react';
import './BeforeAfter.css';

function clamp(value) {
  return Math.min(100, Math.max(0, value));
}

/**
 * Before/after comparison. The before photo is revealed from the left with clip-path.
 * Drag the handle, or focus it and use the arrow keys.
 */
function BeforeAfter({ before, after }) {
  const frameRef = useRef(null);
  const handleRef = useRef(null);
  const [position, setPosition] = useState(50);
  const rounded = Math.round(position);

  function moveTo(clientX) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  }

  function onPointerDown(event) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
    handleRef.current?.focus({ preventScroll: true });
  }

  function onPointerMove(event) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    moveTo(event.clientX);
  }

  function onKeyDown(event) {
    const step = event.shiftKey ? 1 : 5;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      setPosition((prev) => clamp(prev - step));
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      setPosition((prev) => clamp(prev + step));
    } else if (event.key === 'Home') {
      event.preventDefault();
      setPosition(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setPosition(100);
    }
  }

  return (
    <div
      className="before-after"
      style={{ '--compare': `${position}%` }}
    >
      <div
        className="before-after__frame"
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        <div className="before-after__media">
          <img
            className="before-after__after"
            src={after.image}
            alt={after.imageAlt}
            draggable="false"
          />
          <img
            className="before-after__before"
            src={before.image}
            alt={before.imageAlt}
            draggable="false"
          />
          <span className="before-after__tag before-after__tag--before">
            {before.label}
          </span>
          <span className="before-after__tag before-after__tag--after">
            {after.label}
          </span>
        </div>

        <span className="before-after__rule" aria-hidden="true" />
        <div
          ref={handleRef}
          className="before-after__handle"
          role="slider"
          tabIndex={0}
          aria-label="Compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={rounded}
          aria-valuetext={`${rounded}% before, ${100 - rounded}% after`}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
        >
          <span className="before-after__grip" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

export default BeforeAfter;
