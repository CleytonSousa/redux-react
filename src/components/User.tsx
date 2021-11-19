import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { UserContainer } from "../style";

const User = () => {
    const {name} = useSelector(selectUser);
    return(
        <UserContainer>
            <h1>Usuário: {name} </h1>
            <div>
                {name === undefined || name === "" ? <h1>Status: <i style={{color: 'red'}}>Offline</i></h1> : <h1>Status: <i style={{color: 'green'}}>Online</i></h1>}
            </div>
        </UserContainer>
    )
}

export default User