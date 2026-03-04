import React from 'react';

function FeatureRow() {
  const features = [
    {
      title: 'Intent-first workflow',
      description: 'Describe what you want and focus on the outcome, not file-by-file edits.'
    },
    {
      title: 'GitHub-native execution',
      description: 'Work in existing repositories with clean diffs and straightforward review.'
    },
    {
      title: 'Mobile full-stack shipping',
      description: 'Frontend, backend, and infra workflows from one mobile workspace.'
    }
  ];

  return (
    <div className="features-section">
      <div className="feature-row">
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-item">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureRow;