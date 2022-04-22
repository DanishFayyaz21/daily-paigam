import { lazy, useState, useEffect } from "react";
import { commonService, postService } from "../../Services";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumbs/Website";
import Content from "./Content";
import "./Post.scss";

const Suggestions = lazy(() => import("./Suggestions"));
const UserBox = lazy(() => import("./UserBox"));

const Post = () => {
  const { slug } = useParams();

  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const id = commonService.extractIdFromSlug(slug);

    getPost(id);
  }, [slug]);

  const getPost = (id) => {
    var data = {};
    var query = { id };
    var headers = {};
    postService.find(data, query, headers).then((res) => {
      const { data } = res;
      setPost(data[0]);

      getPosts();

      const { id } = data[0];
      commonService.viewed({ post: id });
    });
  };

  const getPosts = () => {
    const data = {};
    const query = { page: "0", limit: 6 };
    const headers = {};

    postService.find(data, query, headers).then((res) => {
      const { data } = res;
      setPosts(data);
    });
  };

  return (
    <div id="post">
      {post && (
        <div className="container">
          <Breadcrumb routes={[post.title]} />

          <div className="row">
            <div className="col-sm-8">
              <Content post={post} />
            </div>
            <div className="col-sm-4 mt-4">
              <UserBox data={post} />
            </div>
          </div>
        </div>
      )}

      <div id="suggestions">
        {posts && posts.length ? (
          <Suggestions id={post.id} posts={posts} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Post;
