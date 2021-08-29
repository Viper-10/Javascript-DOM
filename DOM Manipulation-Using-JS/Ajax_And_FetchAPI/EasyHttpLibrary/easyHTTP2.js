class EasyHttp2 {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((errMessage) => reject(errMessage));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        method: "POST",
      })
        .then((response) => response.json())
        .then((PostedPost) => resolve(PostedPost))
        .catch((error) => reject(error));
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
        method: "PUT",
      })
        .then((response) => response.json())
        .then((PostedPost) => resolve(PostedPost))
        .catch((error) => reject(error));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response)
        .then(() => resolve("Deleted sucessfully"))
        .catch((err) => reject(err));
    });
  }
}
