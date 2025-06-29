import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid'

interface InitialState {
    task: ITask[];
    filter: "all" | "High" | "Medium" | "Low"
}

const initialState: InitialState = {
    task: [],
    filter: "all"
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) =>{
            const id = 'dgljklf'
            const taskData = {
                ...action.payload,
                id,
                isCompleted: false
            }
            state.task.push(taskData)
        }
    }
})


export const selectTasks = (state: RootState) =>{
    return state.tasks.task
}

export const selectFilter = (state: RootState) =>{
    return state.tasks.filter
}

export const {addTask} = taskSlice.actions;

export default taskSlice.reducer;