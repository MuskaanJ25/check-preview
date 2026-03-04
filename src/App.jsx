import React from 'react';
import TopNav from './components/TopNav';
import HeroCard from './components/HeroCard';
import FeatureRow from './components/FeatureRow';
import BlogCard from './components/BlogCard';

function App() {
  return (
    <div className="app-container">
      <TopNav />
      <HeroCard />
      <FeatureRow />
      <BlogCard />
    </div>
  );
}

export default App;