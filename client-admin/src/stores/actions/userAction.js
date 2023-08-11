// const baseUrl = "http://localhost:3000";
const baseUrl = "https://mkid.ezwx.xyz";

export function postLogin(data) {
  return (dispatch, getState) => {
    return fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        localStorage.setItem("access_token", data.access_token);
      });
  };
}


export function postRegister(data) {
  return (dispatch, getState) => {
     return fetch(`${baseUrl}/register`, {
      method: "POST",
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
        return;
      });
  };
}
