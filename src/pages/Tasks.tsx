import { selectFilter, selectTasks } from "@/redux/features/tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {

    // const tasks = useAppSelector((state) => state.tasks.task)
    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)

    console.log(tasks);
    console.log(filter);


    return (
        <div>
            <h1>This is Tasks component</h1>
        </div>
    );
}