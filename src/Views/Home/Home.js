import { useState, useEffect } from "react";
import { postService } from "../../Services";

import PostBox from "../../Components/PostBox";
import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    const data = {};
    const query = { page: "0", limit: 12 };
    const headers = {};

    postService.find(data, query, headers).then((res) => {
      const { data } = res;
      setPosts(data);
    });
  };

  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="row">
              {posts &&
                posts.map((post, i) => (
                  <div className="col-sm-6" key={i}>
                    <PostBox key={i} post={post} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
