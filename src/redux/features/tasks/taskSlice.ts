import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
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
        }
    ]
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {}
})



export default taskSlice.reducer;