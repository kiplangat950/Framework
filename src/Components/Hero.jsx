export default function Hero() {
  return (
    <section className="hero-section py-4" aria-labelledby="hero-title">
      <div className="container">
        <div className="position-relative rounded-4 overflow-hidden">
          <img
            className="hero-image img-fluid w-100 object-fit-cover"
            src="https://images.frame.work/frameworkmarketplace/aJBl86Tt2nPbZzs1_homepage_fw13-banner_desktop.jpg?auto=format%2Ccompress"
            alt="Framework 13 Pro laptop"
            
            style={{ minHeight: "350px", objectPosition: "center" }}
          />

          <div className="position-absolute top-50 start-0 translate-middle-y ps-3 ps-md-5 w-100">
            {/* We use a nested div with column widths so text wraps nicely */}
            <div className="col-11 col-sm-9 col-md-6 col-lg-5 text-white">
              <h1
                id="hero-title"
                className="fs-3 fs-md-2 fw-bold lh-sm text-shadow mb-3"
              >
                Framework Laptop 13 isn’t our computer. It’s yours.
              </h1>
              <p className="text-shadow mb-4 d-none d-sm-block">
                Updated for 2025 with AMD's latest Ryzen™ AI 300 Series
                Processors with up to 12 CPU cores.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn text-white fw-medium"
                  style={{ backgroundColor: "#e76235" }}
                >
                  Configure now
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light fw-medium"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
