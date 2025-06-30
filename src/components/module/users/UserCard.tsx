import { FaTrash } from 'react-icons/fa';
import type { IUser } from '@/types';
import { useAppDispatch } from '@/redux/hook';
import { deleteUser } from '@/redux/features/users/userSlice';


interface IProps {
    user: IUser;
}

export default function UserCard({ user }: IProps) {

    const dispatch = useAppDispatch();


    return (
        <div className="bg-gray-200 dark:bg-white text-black dark:text-black rounded-xl p-4 shadow-md flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
                {/* Left Side: Dot + Title */}
                <div className="">
                    <h2 className="text-base font-medium">{user.name}</h2>
                </div>

                {/* Right Side: Delete + Checkbox */}
                <div className="flex items-center gap-2">
                    <button className="text-red-500 hover:text-red-600">
                        <FaTrash onClick={() => dispatch(deleteUser(user.id))} size={12} />
                    </button>
                </div>
            </div>


        </div>
    );
}
