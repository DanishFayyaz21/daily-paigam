import Axios from "axios";
import appConfig from "../Configurations/app.config";

const commonService = {};

commonService.validateURL = (str) => {
  const pattern = new RegExp(
    /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/
  ); // fragment locator
  return !!pattern.test(str);
};

commonService.validateEmail = (str) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !pattern.test(str);
};

commonService.validateUsername = (str) => {
  const pattern = /^[a-z0-9_.]+$/;
  return !pattern.test(str);
};

commonService.uploadImage = async (data, headers, type) => {
  return await Axios({
    method: "post",
    url: `${appConfig.api}upload/${type == "single" ? "single" : "multi"}`,
    headers,
    data,
  });
};

commonService.urlHelper = (str) => {
  return str
    .replaceAll(/[&\/\\#,+()$~%!.„'":*‚^_¤?<>|@ª{«»§}©®™ ]/g, "-")
    .replace(/-{2,}/g, "-")
    .toLowerCase();
};

commonService.extractIdFromSlug = (slug) => {
  const temp = slug.split("-");
  return temp[temp.length - 1];
};

commonService.viewed = async (data) => {
  return await Axios({
    method: "post",
    url: `${appConfig.api}views`,
    data,
  });
};

export { commonService };
