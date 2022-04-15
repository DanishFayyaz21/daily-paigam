import { useState, useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import SuiButton from "../../../Components/SuiButton";
import { toast } from "react-toastify";

import UserLayout from "../../../Layouts/User";

import { FaUpload } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";

import { categories } from "../../../Data";
import { postService } from "../../../Services";

import "./Post.scss";

function Post() {
  const editorRef = useRef();

  const title = useRef();
  const category = useRef();
  const [image, setImage] = useState();

  const submit = (event) => {
    event.preventDefault();

    const content = editorRef.current.getContent();
    if (!image || !content) toast.warn("Please, complete the form!");
    else {
      const headers = { "x-access-token": localStorage.getItem("token") };

      const formData = new FormData();
      formData.append("title", title.current.value);
      formData.append("category", category.current.value);
      formData.append("content", content);
      formData.append("thumbnail", image);

      postService.create(formData, headers);
    }
  };

  return (
    <UserLayout header={false}>
      <div id="post">
        <div className="row">
          <div className="col-sm-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="card-title fw-bold">Post</div>

                <form className="row" onSubmit={submit}>
                  <div className="col-sm-12">
                    <div className="form-group mb-3">
                      <label htmlFor="thumbnail">Thumbnail</label>
                      {image ? (
                        <div className="image-box">
                          <div
                            className="close-btn"
                            onClick={() => setImage("")}
                          >
                            &times;
                          </div>
                          <img src={URL.createObjectURL(image)} />
                        </div>
                      ) : (
                        <div
                          className="image-upload-box"
                          onClick={() =>
                            document.getElementById("thumbnail").click()
                          }
                        >
                          <FaUpload />
                          <div>Click to upload thumbnail</div>
                        </div>
                      )}
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="hidden-input"
                        name="thumbnail"
                        id="thumbnail"
                        accept="image/*"
                      />
                    </div>
                  </div>

                  <div className="col-sm-8">
                    <div className="form-group mb-3">
                      <label htmlFor="title">Title</label>
                      <input
                        required
                        id="title"
                        ref={title}
                        type="text"
                        maxlength="120"
                        placeholder="Title"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group mb-3">
                      <label htmlFor="category">Category</label>
                      <select
                        ref={category}
                        id="category"
                        className="form-select"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((category, i) => (
                          <option key={i}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group mb-3">
                      <label>Content</label>
                      <Editor
                        apiKey="wj2f3h6vqpf24hq1epjhzfxi9tgy1x44pyuge2gtwuq4996z"
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        init={{
                          height: 500,
                          menubar: false,
                          toolbar:
                            "undo redo formatselect " +
                            "bold italic backcolor | alignleft aligncenter " +
                            "alignright alignjustify bullist numlist outdent indent " +
                            "removeformat",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-group mb-3">
                      <SuiButton
                        type="submit"
                        variant="gradient"
                        color="primary"
                      >
                        Submit
                      </SuiButton>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mt-3 mt-sm-0">
            <div className="card tip-card border-0 shadow-sm">
              <div className="card-body">
                <div className="card-title fw-bold">
                  <FcAbout />
                  &nbsp; Tips for a better post
                  <ul>
                    <li>Thumbnail is added.</li>
                    <li>Thumbnail size is below 1mb.</li>
                    <li>Title is within 60 letters.</li>
                    <li>Title is informative and explanotory.</li>
                    <li>Category matches post content.</li>
                    <li>
                      Post Content is well written and properly formatted.
                    </li>
                    <li>Inappropriate Content will be removed.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default Post;
