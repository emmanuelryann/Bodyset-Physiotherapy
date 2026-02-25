import '../styles/Blog.css'

const Blog = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
      date: 'Jul 5, 2025',
      author: 'Rodger Struck',
      title: 'Top 5 Physiotherapy Exercises to Relieve Lower Back Pain',
    },
    {
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
      date: 'Jul 10, 2025',
      author: 'Katie Sims',
      title: 'How Physiotherapy Helps You Recover After Surgery',
    },
    {
      image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=600&q=80',
      date: 'Jul 25, 2025',
      author: 'Paula Mora',
      title: 'Physiotherapy for Seniors: Staying Mobile, Safe & Independent',
    },
  ]

  return (
    <section className="blog" id="blog">
      <div className="blog__container section-container">
        <div className="blog__header">
          <div className="blog__header-text">
            <span className="blog__label">
              <span className="blog__label-icon"><i className="fa-solid fa-leaf"></i></span>
              Our Blog
            </span>
            <h2 className="section-heading blog__heading">
              Your Recovery Doesn&apos;t End<br/>Here It Grows Here
            </h2>
          </div>
          <a href="#blog" className="btn-primary blog__view-more">
            View More Blog
          </a>
        </div>
        <div className="blog__grid">
          {posts.map((post, index) => (
            <div className="blog__card" key={index}>
              <div className="blog__card-image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog__card-image"
                />
              </div>
              <div className="blog__card-content">
                <div className="blog__card-meta">
                  <span className="blog__card-meta-item">
                    <i className="fa-regular fa-calendar"></i> {post.date}
                  </span>
                  <span className="blog__card-meta-item">
                    <i className="fa-regular fa-user"></i> {post.author}
                  </span>
                </div>
                <h3 className="blog__card-title">{post.title}</h3>
                <span className="blog__card-link">
                  Learn More <i className="fa-solid fa-arrow-right blog__card-link-icon"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
