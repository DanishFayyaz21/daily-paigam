import SuiAvatar from "../../../Components/SuiAvatar";
import { appConfig } from "../../../Configurations";
import { commonService } from "../../../Services";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";
import moment from "moment";
import "./styles.scss";

const Content = ({ post }) => {
  const { api } = appConfig;

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div id="content">
      <main>
        <h1>{post.title}</h1>
        <p className="post-time">
          <FcOvertime /> {moment(post.createdAt).format("DD, MMMM YYYY")}
        </p>
        <div className="img-box">
          <div className="user-box">
            <div className="d-flex">
              <Link
                className="me-2"
                to={`/u/${commonService.urlHelper(`${post.username}`)}`}
              >
                <div className="d-flex flex-row">
                  <SuiAvatar
                    name={post.name ? post.name : "D"}
                    variant="rounded"
                    bgColor="error"
                    size="xs"
                    shadow="sm"
                  />
                  <div className="user-box-text">{post.username}</div>
                </div>
              </Link>
              |<span className="ms-2">Views: {post.total}</span>
            </div>
          </div>
          <img
            src={`${api}public/${post.thumbnail}`}
            alt={`${post.title} Thumbnail`}
          />
        </div>

        <article dangerouslySetInnerHTML={createMarkup(post.content)} />
      </main>
    </div>
  );
};

export default Content;
