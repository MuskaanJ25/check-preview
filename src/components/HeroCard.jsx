import React from 'react';

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <h1 className="hero-title">
            Talk.<br />
            Walk.<br />
            <span className="highlight">Create.</span>
          </h1>
          <p className="hero-body">
            Via is a mobile IDE for real software work. Open a repository, make changes, review, and ship from your phone.
          </p>
          <div className="cta-row hero-cta">
            <button className="btn-waitlist">
              Join waitlist
              <span className="arrow">→</span>
            </button>
            <a href="#" className="link-more secondary-link">Read more</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mock-window-container">
            <div className="device-wrap">
              <div className="device-glow"></div>
              <div className="task-card floating-card">
                <div className="card-label">Task</div>
                <div className="card-text">"Refactor auth middleware"</div>
              </div>
              <div className="device-frame">
                <div className="window-dots">
                  <div className="window-dot red"></div>
                  <div className="window-dot yellow"></div>
                  <div className="window-dot green"></div>
                </div>
                <div className="window-content">
                  <div style={{marginBottom: '16px', color: '#64748B', fontSize: '12px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase'}}>Developers</div>
                  <div style={{background: '#F1F5F9', borderRadius: '8px', padding: '12px', marginBottom: '8px'}}>
                    <div style={{color: '#1E293B', fontSize: '13px', fontWeight: '600', marginBottom: '4px'}}>Project Repository</div>
                    <div style={{color: '#64748B', fontSize: '12px'}}>via/mobile-ide</div>
                  </div>
                  <div style={{background: '#F1F5F9', borderRadius: '8px', padding: '12px', marginBottom: '8px'}}>
                    <div style={{color: '#1E293B', fontSize: '13px', fontWeight: '600', marginBottom: '4px'}}>Recent Changes</div>
                    <div style={{color: '#64748B', fontSize: '12px'}}>auth.js, middleware.js</div>
                  </div>
                </div>
                <div className="window-status">
                  <span className="status-dot"></span>
                  Live coding flow
                  <span style={{marginLeft: 'auto', fontSize: '11px'}}>Prompt → Code change → Review → Commit → Ship</span>
                </div>
              </div>
              <div className="ship-card floating-card">
                <div className="status-row">
                  <span className="green-check">●</span>
                  Ready to ship
                </div>
                <div className="sub-text">3 files changed, tests passed.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;