/**
 * Shows an image when available, otherwise an industrial placeholder panel.
 * Put photos in /public/images/ and keep filenames matching src/data/content.js
 *
 * labelVariant:
 *   - "bar" (default): full-width caption bar
 *   - "discreet": small corner tag (used on gallery sample images)
 */
function PhotoPanel({
  src,
  alt,
  label,
  labelVariant = 'bar',
  reveal = true,
  className = '',
}) {
  const labelClass =
    labelVariant === 'discreet'
      ? 'photo-panel__label photo-panel__label--discreet'
      : 'photo-panel__label';

  // reveal-image stays on the sized panel (not the clipped media),
  // so IntersectionObserver can still "see" it.
  const panelClass = [
    'photo-panel',
    reveal ? 'reveal-image' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={panelClass}>
      <div className="photo-panel__media">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>
      {label ? <span className={labelClass}>{label}</span> : null}
    </div>
  );
}

export default PhotoPanel;
