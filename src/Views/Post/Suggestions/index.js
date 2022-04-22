import PostBox from "../../../Components/PostBox";

const Suggestions = ({ id, posts }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            {posts &&
              posts.map(
                (data, i) =>
                  data.id !== id && (
                    <div className="col-sm-6" key={i}>
                      <PostBox key={i} post={data} />
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
