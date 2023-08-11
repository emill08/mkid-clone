// const baseUrl = "http://localhost:3000";
const baseUrl = "https://mkid.ezwx.xyz";


export function actionSetCategories(payload) {
  return {
    type: `success/fetchCategories`,
    payload,
  };
}

export function fetchCategories() {
  return (dispatch) => {
    return fetch(`${baseUrl}/categories`, {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw res.text();
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        dispatch(actionSetCategories(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function postCategory(data) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/categories`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          if (data.message.length) {
            throw data.message;
          }
        }
      });
  };
}

export function deleteCategory(id) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/categories/${id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`cannot delete category`);
        }
        dispatch(fetchCategories());
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function putCategory(data, id) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/categories/${id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`cannot edit category`);
      }
      dispatch(fetchCategories());
      return;
    });
  };
}

export function getOneCategory(id) {
    return (dispatch) => {
      return fetch(`${baseUrl}/categories/${id}`, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw res.text();
          }
        //   console.log(res)
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }