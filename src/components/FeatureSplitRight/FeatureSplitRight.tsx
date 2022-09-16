const FeatureSplitRight = () => {
  return (
    <>
      <div className="container">
        <div className="featureSplitRight__wrapper">
          <div className="featureSplitRight__image">
            <img src="./img/about-left.png" alt="" />
          </div>
          <div className="featureSplitRight__work">
            <div className="featureSplitRight__centered">
              <h1 className="featureSplitRight__heading">How we work</h1>
              <p className="featureSplitRight__paragraph">
                We’ve actually already asked hundreds of women what they want,
                and made a database with the results. All you have to do is take
                our short survey that only takes seconds, and our proprietary
                algorithm will match you with a few perfect gift options.
              </p>
              <a className="button__transparent-marmalade" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSplitRight;
