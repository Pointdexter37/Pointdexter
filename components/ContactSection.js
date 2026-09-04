export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="chat-container">
        <div className="chat-bubble chat-outgoing">
          love your work - how can i get in touch?
        </div>

        <div className="chat-bubble chat-incoming">
          appreciate it! i&apos;m most active on x
        </div>

        <div className="chat-bubble chat-incoming">
          dm{" "}
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            @Pointdexter37
          </a>{" "}
          or email{" "}
          <a href="mailto:manikurmi14@gmail.com">manikurmi14@gmail.com</a>, i
          usually reply within a day
        </div>

        <div className="chat-bubble chat-outgoing">alright, thanks!</div>

        <div className="chat-bubble chat-incoming">
          you bet - talk to you soon
        </div>
      </div>
    </section>
  );
}
