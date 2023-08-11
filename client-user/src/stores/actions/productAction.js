// const baseUrl = "http://localhost:3000/customer";
const baseUrl = "https://mkid.ezwx.xyz";

export function actionSetProducts(payload) {
  return {
    type: `success/fetchProducts`,
    payload,
  };
}

export function fetchProducts() {
  return (dispatch) => {
    return fetch(`${baseUrl}/customer/products`, {
      headers: {
        "Content-Type": "application/json",
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


export function getOneProduct(id) {
  return (dispatch) => {
    return fetch(`${baseUrl}/customer/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
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