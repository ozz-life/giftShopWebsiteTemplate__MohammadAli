const PostsTall = () => {
  return (
    <>
      <div className="container">
        <div className="postsTall">
          <div className="postsTall__header">
            <h1 className="postsTall__heading">Gifts for all Occasions</h1>
            <div className="postsTall__paragraph">
              “Try our web app to find the best gifts for all occasions”
            </div>
          </div>

          <div className="postsTall__cards">
            <div className="postTall__card">
              <img src="./img/gifts1.webp" alt="" />
              <div className="postTall__card-txt">
                <p className="postTall__card-heading">Birthday</p>
                <a className="postTall__card-link" href="#">
                  See More ›
                </a>
              </div>
            </div>
            <div className="postTall__card">
              <img src="./img/gifts2.webp" alt="" />
              <div className="postTall__card-txt">
                <p className="postTall__card-heading">Anniversary</p>
                <a className="postTall__card-link" href="#">
                  See More ›
                </a>
              </div>
            </div>
            <div className="postTall__card">
              <img src="./img/gifts3.webp" alt="" />
              <div className="postTall__card-txt">
                <p className="postTall__card-heading">Valentine's Day</p>
                <a className="postTall__card-link" href="#">
                  See More ›
                </a>
              </div>
            </div>
            <div className="postTall__card">
              <img src="./img/gifts4.webp" alt="" />
              <div className="postTall__card-txt">
                <p className="postTall__card-heading">Christmas</p>
                <a className="postTall__card-link" href="#">
                  See More ›
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsTall;
