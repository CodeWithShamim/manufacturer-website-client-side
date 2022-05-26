import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const newUser = email;
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newUser }),
      })
        .then((res) => res.json())
        .then((data) => {
          const getToken = data.token;
          localStorage.setItem("accessToken", getToken);
          setToken(getToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
