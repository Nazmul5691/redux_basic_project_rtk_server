import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
    filter: "all" | "High" | "Medium" | "Low"
}

const initialState: InitialState = {
    task: [
        {
            id: "fkjfjkasdfh",
            title: "Initialized frontend",
            description: "Create home page and navbar",
            dueDate: "2035-11-11",
            isCompleted: false,
            priority: "High"
        },
        {
            id: "fkjfjkasdfhsdfasdf",
            title: "Initialized github repo",
            description: "Create github repo",
            dueDate: "2035-11-11",
            isCompleted: false,
            priority: "Medium"
        }
    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})


export const selectTasks = (state: RootState) =>{
    return state.tasks.task
}

export const selectFilter = (state: RootState) =>{
    return state.tasks.filter
}



export default taskSlice.reducer;