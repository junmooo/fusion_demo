import axios from "axios";

const getPr3wnfjf = (url) => {
  return axios.get(url);
};

const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        if (data.res === "SUCCESS") {
          resolve(data);
        } else {
          reject(data.msg);
        }
      })
      .catch((error) => {
        reject("服务器异常"+error);
      });
  });
};

export { getPr3wnfjf, promiseGet };
