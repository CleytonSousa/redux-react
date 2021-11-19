import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "user",

    initialState: {
        user: "",
        isLogged: false
    },
        reducers:{
            changeUser(state, {payload}) {
                return{
                    ...state,
                    isLogged: true,
                    name: payload
                }
            },

            logout(state){
                return{
                    ...state,
                    isLogged: false,
                    name: ""
                }
            }
        }
})

export const {changeUser, logout} = slice.actions

export const selectUser = (state: { user: any; }) => state.user

export default slice.reducer