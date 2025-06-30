import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
// import TaskCard from "@/components/module/tasks/TasksCard";
import TaskCard from "@/components/module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";
// import {  updateFilter } from "@/redux/features/tasks/taskSlice";
// import { useAppDispatch, } from "@/redux/hook";


export default function Tasks() {

    // const tasks = useAppSelector((state) => state.tasks.task)
    // const tasks = useAppSelector(selectTasks)

    // console.log(tasks);

    // const dispatch = useAppDispatch();


    const {data, isLoading} = useGetTasksQuery(undefined)

    // console.log(data, isLoading, isError);
    if(isLoading){
        return <p>Loading.....</p>
    }

    return (
        <div>
            <div className="flex justify-end my-4 ">
                <h1 className="mr-auto">Task</h1>
                <Tabs defaultValue="all" className="mr-4">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="low">Low</TabsTrigger>
                        <TabsTrigger value="medium">Medium</TabsTrigger>
                        <TabsTrigger value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className="flex flex-col gap-4">
                {
                    !isLoading && 
                    data.tasks.map((task : ITask) => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    );
}