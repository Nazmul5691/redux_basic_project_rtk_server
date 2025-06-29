import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[];
    filter: "all" | "High" | "Medium" | "Low"
}

const initialState: InitialState = {
    task: [],
    filter: "all"
}


type DraftTask = Pick<ITask, "description" | "dueDate" | "priority" | "title">

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
}

// const taskSlice = createSlice({
//     name: "tasks",
//     initialState,
//     reducers: {
//         addTask: (state, action: PayloadAction<ITask>) =>{
//             const id = uuidv4();
//             const taskData = {
//                 ...action.payload,
//                 id,
//                 isCompleted: false
//             }
//             state.task.push(taskData)
//         }
//     }
// })

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.task.push(taskData)
        }
    }
})


export const selectTasks = (state: RootState) => {
    return state.tasks.task
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;