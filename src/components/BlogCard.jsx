import React from 'react';

function BlogCard() {
  const blogPosts = [
    {
      meta: 'January 23, 2026  •  Via Team',
      title: 'The Future of Autonomous Software Engineering',
      excerpt: 'Exploring how AI is transforming the way we build and ship software at scale, and why accuracy matters more than speed.'
    },
    {
      meta: 'December 16, 2025  •  Ila Mathur and Shray Alag',
      title: 'Our Mission',
      excerpt: 'The new age of programming is ruled by ideas, not IDEs. Via exists to make software creation mobile, intent-first, and accessible.'
    }
  ];

  return (
    <div className="blog-section">
      <div className="blog-card">
        <div className="blog-header">
          <div className="blog-label-group">
            <span className="blog-label">BLOG</span>
            <h2 className="blog-title">From the Blog</h2>
          </div>
          <a href="#" className="link-all-posts">
            All posts
            <span className="arrow">→</span>
          </a>
        </div>

        {blogPosts.map((post, index) => (
          <React.Fragment key={index}>
            <article className="blog-item">
              <div className="blog-meta">{post.meta}</div>
              <h3 className="blog-item-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </article>
            {index < blogPosts.length - 1 && <div className="blog-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BlogCard;