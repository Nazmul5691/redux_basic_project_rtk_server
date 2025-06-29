import { FaTrash } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import type { ITask } from '@/types';
import { cn } from '@/lib/utils';


interface IProps {
    task: ITask;
}

export default function TaskCard({task} :IProps) {
  return (
    <div className="bg-gray-200 dark:bg-white text-black dark:text-black rounded-xl p-4 shadow-md flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        {/* Left Side: Dot + Title */}
        <div className="flex items-center gap-1">
          <BsDot className={cn("text-4xl", {
            "text-green-500" : task.priority === "low",
            "text-yellow-500" : task.priority === "medium",
            "text-red-500" : task.priority === "high",
          })} />
          <h2 className="text-base font-medium">{task.title}</h2>
        </div>

        {/* Right Side: Delete + Checkbox */}
        <div className="flex items-center gap-2">
          <button className="text-red-500 hover:text-red-600">
            <FaTrash size={12} />
          </button>
          <input type="checkbox" className="accent-green-500 w-3.5 h-3.5" />
        </div>
      </div>

      {/* Task Description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-500 pl-5">{task.description}</p>
    </div>
  );
}
