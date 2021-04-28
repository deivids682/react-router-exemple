async function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        {
          if (response.status < 400) {
            resolve(response.json());
          } else {
            reject(response.json());
          }
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default {
  get,
};
