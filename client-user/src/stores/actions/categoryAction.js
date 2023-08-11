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
    return fetch(`${baseUrl}/customer/categories`, {
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
        // console.log(data)
        dispatch(actionSetCategories(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}


export function getOneCategory(id) {
    return (dispatch) => {
      return fetch(`${baseUrl}/customer/categories/${id}`, {
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