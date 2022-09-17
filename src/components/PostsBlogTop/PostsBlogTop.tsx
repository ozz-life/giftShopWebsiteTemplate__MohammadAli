const PostsBlogTop = () => {
  return (
    <>
      <div className="container">
        <div className="postsBlogTop">
          <div className="postsBlogTop__header">
            <h1 className="postsBlogTop__heading">Our Best Blogs Ever</h1>
            <p className="postsBlogTop__paragraph">
              “Try our blog to find the best tips and tricks to select your
              gift”
            </p>
          </div>
        </div>
        <div className="postsBlogTop__posts">
          <article className="postsBlogTop__article postsBlogTop__article-top">
            <div className="postsBlogTop__article-image">
              <img src="./img/posts.webp" alt="" />
            </div>
            <div className="postsBlogTop__article-txt_top">
              <p className="postsBlogTop__article-author postsBlogTop__article-author_top">
                Mr. John Doe
              </p>
              <h1 className="postsBlogTop__article-heading postsBlogTop__article-heading_top">
                The best way to wish your wife
              </h1>
              <p className="postsBlogTop__article-paragraph"></p>
              <a
                className="postsBlogTop__article-readmore postsBlogTop__article-readmore_top"
                href="#"
              >
                Read More
              </a>
            </div>
          </article>
          <article className="postsBlogTop__article postsBlogTop__article-left">
            <p className="postsBlogTop__article-author"></p>
            <h1 className="postsBlogTop__article-heading">
              Database to find the gifts for your girlfriend
            </h1>
            <p className="postsBlogTop__article-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
            <a className="postsBlogTop__article-readmore" href="#">
              Read More
            </a>
          </article>
          <article className="postsBlogTop__article postsBlogTop__article-right">
            <p className="postsBlogTop__article-author"></p>
            <h1 className="postsBlogTop__article-heading">
              How Artificial Intelligence read your mind to find the best gift
            </h1>
            <p className="postsBlogTop__article-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
            <a className="postsBlogTop__article-readmore" href="#">
              Read More
            </a>
          </article>
        </div>
      </div>
    </>
  );
};

export default PostsBlogTop;
