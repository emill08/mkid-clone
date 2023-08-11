// const baseUrl = "http://localhost:3000";
const baseUrl = "https://mkid.ezwx.xyz";

export function actionSetProducts(payload) {
  return {
    type: `success/fetchProducts`,
    payload,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    return fetch(`${baseUrl}/products`, {
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
        console.log(data);
        dispatch(actionSetProducts(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function postProduct(data) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/products`, {
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

export function deleteProduct(id) {
  return (dispatch, getState) => {
    fetch(`${baseUrl}/products/${id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Cannot delete this product`);
        }
        dispatch(fetchProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getOneProduct(id) {
  return (dispatch) => {
    return fetch(`${baseUrl}/products/${id}`, {
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

export function putProduct(data, id) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/products/${id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res.json())
      if (!res.ok) {
        throw new Error(`cannot edit product`);
      }
      dispatch(fetchProducts());
      return;
    });
  };
}