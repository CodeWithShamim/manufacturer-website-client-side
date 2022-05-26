import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    setIsLoading(true);
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`)
        .then((res) => res.json())
        .then((admin) => {
          setIsAdmin(admin);
          setIsLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isLoading];
};

export default useAdmin;
