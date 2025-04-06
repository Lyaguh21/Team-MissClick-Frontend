import { FaPlus } from "react-icons/fa6";
import Button from "../ui/global/Button";
import { FaHistory } from "react-icons/fa";
import TaskBlock from "../ui/Tasks/TaskBlock";
import TaskTemplate from "../ui/Tasks/TaskTemplate";
import { useEffect, useState } from "react";
import ModalWindow from "../ui/global/ModalWindow";
import CreateTask from "../ui/Tasks/CreateTask";
import UpdateTask from "../ui/Tasks/UpdateTask";
import { NavLink } from "react-router";
import { tasksSlice } from "../model/store";

export interface ITaskLess {
  title: string;
  content: string;
  plannedDate: Date;
  image: string;
  id: string;
}

export default function Tasks() {
  const taskSlice = tasksSlice();

  const tasks = taskSlice.tasks;

  useEffect(() => {
    taskSlice.fetchTasks();
  }, []);

  const [visibleCreateTask, setVisibleCreateTask] = useState(false);
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [currentTask, setCurrentTask] = useState<ITaskLess | null>(null);
  return (
    <div className="px-[30px] flex flex-col h-[calc(100vh-74px)]">
      <div className="py-[10px] lg:py-[30px] flex justify-between">
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
          onClick={() => setVisibleCreateTask(!visibleCreateTask)}
        >
          <FaPlus />
          Создать задачу
        </Button>
        <NavLink to={"/audit"}>
          <Button
            appearance="grayButton"
            className="flex gap-[14px] items-center"
          >
            <FaHistory />
            История изменений
          </Button>
        </NavLink>
      </div>
      <div className="flex justify-between">
        <TaskBlock
          nameCol="Отложенные задачи"
          count={tasks.filter((task) => task.status === "POSTPONED").length}
        >
          {tasks.length > 0 &&
            tasks
              .filter((task) => task.status === "POSTPONED")
              .map((task) => (
                <TaskTemplate
                  {...task}
                  setOpenUpdateTask={setOpenUpdateTask}
                  openUpdateTask={openUpdateTask}
                  setCurrentTask={setCurrentTask}
                />
              ))}
        </TaskBlock>

        <TaskBlock
          nameCol="Текущие задачи"
          count={tasks.filter((task) => task.status === "CURRENT").length}
        >
          {tasks.length > 0 &&
            tasks
              .filter((task) => task.status === "CURRENT")
              .map((task) => (
                <TaskTemplate
                  {...task}
                  setOpenUpdateTask={setOpenUpdateTask}
                  openUpdateTask={openUpdateTask}
                  setCurrentTask={setCurrentTask}
                />
              ))}
        </TaskBlock>

        <TaskBlock
          nameCol="Выполненные задачи"
          count={tasks.filter((task) => task.status === "COMPLETED").length}
        >
          {tasks.length > 0 &&
            tasks
              .filter((task) => task.status === "COMPLETED")
              .map((task) => (
                <TaskTemplate
                  {...task}
                  setOpenUpdateTask={setOpenUpdateTask}
                  openUpdateTask={openUpdateTask}
                  setCurrentTask={setCurrentTask}
                />
              ))}
        </TaskBlock>
      </div>

      <ModalWindow isShow={visibleCreateTask}>
        <CreateTask setCreateModal={setVisibleCreateTask} />
      </ModalWindow>

      <ModalWindow isShow={openUpdateTask}>
        {currentTask && (
          <UpdateTask
            setUpdateModal={setOpenUpdateTask}
            form={{
              title: currentTask!.title,
              content: currentTask!.content,
              image: currentTask!.image,
              plannedDate: currentTask!.plannedDate,
              id: currentTask!.id,
            }}
            taskid={currentTask!.id}
          />
        )}
      </ModalWindow>
    </div>
  );
}
