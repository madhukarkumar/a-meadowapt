export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="welcome-script">Welcome</span>
          <h1 className="hero-title">
            Meadowview
            <br />
            Apartments
          </h1>
        </div>
        <div className="hero-tour">
          <span>Tour Today!</span>
          <a href="#contact" className="tour-btn" aria-label="Tour Today">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.8l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
