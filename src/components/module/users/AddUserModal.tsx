// import { Button } from "@/components/ui/button"
// import {
//     Dialog,
//     DialogContent,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
// import { Input } from "@/components/ui/input";
// import { addUser } from "@/redux/features/users/userSlice";
// import { useAppDispatch } from "@/redux/hook";
// import type { IUser } from "@/types";
// import { DialogDescription } from "@radix-ui/react-dialog";
// import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

// export function AddUserModal() {

//     const form = useForm();

//     const dispatch = useAppDispatch();


//     const onSubmit: SubmitHandler<FieldValues> = (data) =>{
//         dispatch(addUser(data as IUser))
//     }
   

//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button>Add User</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//                 <DialogHeader>
//                     <DialogDescription className="sr-only">Fill up this form to add user</DialogDescription>
//                     <DialogTitle>Add User</DialogTitle>
//                 </DialogHeader>
//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
//                         <FormField
//                             control={form.control}
//                             name="name"
//                             render={({ field }) => (
//                                 <FormItem>
//                                     <FormLabel>Name</FormLabel>
//                                     <FormControl>
//                                         <Input {...field} value={field.value || ""} />
//                                     </FormControl>
//                                 </FormItem>
//                             )}
//                         />
//                         <DialogFooter>
//                             <Button type="submit">Save changes</Button>
//                         </DialogFooter>
//                     </form>
//                 </Form>
//             </DialogContent>
//         </Dialog>
//     )
// }
