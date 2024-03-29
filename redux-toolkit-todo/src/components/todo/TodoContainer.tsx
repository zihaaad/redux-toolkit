/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState} from "react";
import {AddTodoModal} from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import {useGetTodosQuery} from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const {data} = useGetTodosQuery(priority);
  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[3px]">
        {data?.data?.length > 0 ? (
          <div className="bg-white p-5 w-full h-full space-y-5 rounded-lg">
            {data?.data?.map((todo: any) => (
              <TodoCard key={todo._id} {...todo} />
            ))}
          </div>
        ) : (
          <div className="bg-white text-2xl p-5 font-semibold flex justify-center items-center rounded-md">
            <p>~ There Is No Task In Pending !!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
