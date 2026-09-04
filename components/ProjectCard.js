import { FeaturedIcon } from "./ProjectIcons";

export default function ProjectCard({
  icon,
  name,
  description,
  stars,
  tags = [],
  featured = false,
  href,
}) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper className="project-item" {...wrapperProps}>
      <div className="project-header">
        <span className="project-icon">{icon}</span>
        <span className="project-name">{name}</span>
        {featured && (
          <span className="featured-badge">
            <FeaturedIcon /> featured
          </span>
        )}
        {stars !== undefined && (
          <span className="project-stars">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {stars}
          </span>
        )}
      </div>
      <p className="project-desc">{description}</p>
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
