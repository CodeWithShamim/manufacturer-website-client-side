import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const email = user?.user?.email;
        if (email) {
            fetch(`http://localhost:5000/token/${email}`)
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