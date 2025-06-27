import TaskCard from "@/components/module/tasks/TasksCard";
import { selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";


export default function Tasks() {

    // const tasks = useAppSelector((state) => state.tasks.task)
    const tasks = useAppSelector(selectTasks)

    console.log(tasks);


    return (
        <div>
            <h1>This is Tasks component</h1>
            <div className="flex flex-col gap-4">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} />
                    ))
                }
            </div>
        </div>
    );
}