import appConfig from "../Configurations/app.config";
import Axios from "axios";

const postService = {};

postService.create = async (data, headers) => {
  return await Axios({
    method: "post",
    url: `${appConfig.api}posts`,
    headers,
    data,
  });
};
export { postService };
