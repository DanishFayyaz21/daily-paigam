import appConfig from "../Configurations/app.config";
import Axios from "axios";

const authService = {};

authService.create = async (data) => {
  return await Axios.post(`${appConfig.api}auth`, data);
};

authService.login = async (data) => {
  return await Axios.get(
    `${appConfig.api}auth?${data.username ? `username=${data.username}` : ""}&${
      data.password ? `password=${data.password}` : ""
    }`
  );
};

export { authService };
