import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { LogoutConatiner } from "../style";

const Logout = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return(
        <LogoutConatiner>
            <button onClick={handleLogout}>Logout</button>
        </LogoutConatiner>
    )
}


export default Logout