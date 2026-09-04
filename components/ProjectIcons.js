/**
 * SVG icon components for project cards.
 * Clean, line-art style icons inspired by portfolio/project management iconography.
 */

export function AlgoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
    >
      {/* Brain / neural-network node icon */}
      <circle cx="12" cy="5" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <circle cx="9" cy="19" r="2" />
      <circle cx="15" cy="19" r="2" />
      <line x1="12" y1="7" x2="6" y2="10" />
      <line x1="12" y1="7" x2="18" y2="10" />
      <line x1="6" y1="14" x2="9" y2="17" />
      <line x1="18" y1="14" x2="15" y2="17" />
      <line x1="9" y1="19" x2="15" y2="19" />
    </svg>
  );
}

export function DatabaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
    >
      {/* Database cylinder icon */}
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

export function ImageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
    >
      {/* Image / gallery icon */}
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

export function QueueIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="16"
      height="16"
    >
      {/* Task queue / stacked layers icon */}
      <rect x="2" y="3" width="20" height="5" rx="1" />
      <rect x="2" y="10" width="20" height="5" rx="1" />
      <rect x="2" y="17" width="20" height="5" rx="1" />
      <line x1="6" y1="5.5" x2="6" y2="5.5" />
      <line x1="6" y1="12.5" x2="6" y2="12.5" />
      <line x1="6" y1="19.5" x2="6" y2="19.5" />
    </svg>
  );
}

export function FeaturedIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="10"
      height="10"
    >
      {/* Lightning bolt icon */}
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
