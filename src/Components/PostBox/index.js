import { appConfig } from "../../Configurations";
import { commonService } from "../../Services";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SuiAvatar from "../SuiAvatar";
import SuiBox from "../SuiBox";
import moment from "moment";
import "./styles.scss";

const PostBox = (props) => {
  const post = props.post;
  const { api } = appConfig;

  return post ? (
    <SuiBox borderRadius="xl" shadow="xs" id="post-box">
      <div className="img-box">
        <div className="user-box">
          <Link to={`/u/${commonService.urlHelper(`${post.username}`)}`}>
            <div className="d-flex flex-row">
              <SuiAvatar
                name={post.name}
                variant="rounded"
                bgColor="error"
                size="xs"
                shadow="sm"
              />
              <div className="user-box-text">{post.username}</div>
            </div>
          </Link>
        </div>
        <Link to={`/${commonService.urlHelper(`${post.title}-${post.id}`)}`}>
          <img
            src={`${api}public/${post.thumbnail}`}
            alt={`${post.title} Thumbnail`}
            loading="lazy"
          />
          <h2>{post.title}</h2>
        </Link>
      </div>
      <div className="post-time">{moment(post.createdAt).fromNow()}</div>
    </SuiBox>
  ) : null;
};

export default PostBox;
