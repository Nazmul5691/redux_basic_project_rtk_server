import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../users/userSlice";

interface InitialState {
    task: ITask[];
    filter: "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
    task: [{
        id: "DSbWf72nkbeZh-hdwwFPR",
        title: "ghdfg",
        description: "fgsh",
        priority: "high",
        isCompleted: false,
        dueDate: "2025-06-24T18:00:00.000Z",
        assignedTo: null
    }],
    filter: "all"
}


type DraftTask = Pick<ITask, "description" | "dueDate" | "priority" | "title" | "assignedTo">

const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo ? taskData.assignedTo : null
    };
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
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.task.forEach(task => task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.task = state.task.filter(task => task.id != action.payload)
        },
        updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(deleteUser, (state, action) =>{
            state.task.forEach(task => task.assignedTo === action.payload ? (task.assignedTo = null) : task )
        })
    }
})


export const selectTasks = (state: RootState) => {
    const filter = state.tasks.filter
    if (filter === "low") {
        return state.tasks.task.filter(task => task.priority === "low")
    }
    else if (filter === "medium") {
        return state.tasks.task.filter(task => task.priority === "medium")
    }
    else if (filter === "high") {
        return state.tasks.task.filter(task => task.priority === "high")
    }
    else {
        return state.tasks.task
    }
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;

export default taskSlice.reducer;