import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const newUser = email;
    if (email) {
      fetch(
        `https://rri-server.vercel.app/user/${email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ newUser }),
        }
      )
        .then((res) => {
          if (res.status === 401) {
            toast.error("Unauthorized access");
          } else if (res.status === 403) {
            toast.error("Forbidden access");
          }
          return res.json();
        })
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
