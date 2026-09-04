export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="footer-quote">
        &ldquo;good design is as little design as possible&rdquo;
        <cite>&mdash; dieter rams</cite>
      </p>
      <p className="footer-copy">
        &copy; {year} monikanto kurmi 🐧
      </p>
    </footer>
  );
}
