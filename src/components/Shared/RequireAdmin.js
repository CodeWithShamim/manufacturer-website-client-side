import {useAuthState} from "react-firebase-hooks/auth";
import {Navigate,useLocation} from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading/Loading";

function RequireAdmin({children}) {
    const [user,loading]=useAuthState(auth);
    const location=useLocation();
    const [isAdmin, isLoading] = useAdmin();

    if(loading || isLoading) {
        return <Loading />;
    }
          
    if(isAdmin){
        if(!user || !isAdmin) {
            return <Navigate to="/" state={{from: location}} replace />;
        }
        return children;
    }

}

export default RequireAdmin;
