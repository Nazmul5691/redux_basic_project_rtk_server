import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    user: IUser[]
}

const initialState: InitialState = {
    user: [
        {
            id: "DSbWf72nkbeZh-hdwdfasdwFPR",
            name: "mir",
        },
        {
            id: "DSbWf72nkbeZh-hdwdfasdfghgwFPR",
            name: "mezba",
        }
    ]
}


type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
    return { id: nanoid(), ...userData }
}



const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<DraftUser>) => {
            const userData = createUser(action.payload)
            state.user.push(userData)
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state.user = state.user.filter(user => user.id != action.payload)
        }
    }
})


export const selectUsers = (state: RootState) => state.users.user


export const { addUser, deleteUser } = userSlice.actions

export default userSlice.reducer;


