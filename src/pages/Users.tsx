import { AddUserModal } from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/users/userSlice";
import { useAppSelector } from "@/redux/hook";


export default function Users() {

    const users = useAppSelector(selectUsers)
    
    // const dispatch = useAppDispatch();
    

    return (
        <div>
            <div className="flex justify-end my-4 ">
                <h1 className="mr-auto">Users</h1>
                
                <AddUserModal />
            </div>
            <div className="flex flex-col gap-4">
                {
                    users.map((user) => (
                        <UserCard user={user} key={user.id} />
                    ))
                }
            </div>
        </div>
    );
}