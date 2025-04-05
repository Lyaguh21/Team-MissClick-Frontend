import { FaPlus } from "react-icons/fa6";
import Button from "../ui/global/Button";
import { FaHistory } from "react-icons/fa";
import TaskBlock from "../ui/Tasks/TaskBlock";
import TaskTemplate from "../ui/Tasks/TaskTemplate";
import { useState } from "react";
import ModalWindow from "../ui/global/ModalWindow";
import CreateTask from "../ui/Tasks/CreateTask";
import UpdateTask from "../ui/Tasks/UpdateTask";

export interface ITaskLess {
  title: string;
  content: string;
  plannedDate: string;
  image: string;
  id: string;
}

export default function Tasks() {
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
        <Button
          appearance="grayButton"
          className="flex gap-[14px] items-center"
        >
          <FaHistory />
          История изменений
        </Button>
      </div>
      <div className="flex justify-between">
        <TaskBlock nameCol="Отложенные задачи" count={4}>
          <TaskTemplate
            id="1"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Высокий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
          <TaskTemplate
            id="2"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Средний"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
          <TaskTemplate
            id="3"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
          <TaskTemplate
            id="4"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Высокий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
        </TaskBlock>

        <TaskBlock nameCol="Текущие задачи" count={1}>
          <TaskTemplate
            id="5"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Высокий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
        </TaskBlock>

        <TaskBlock nameCol="Выполненные задачи" count={1}>
          <TaskTemplate
            id="6"
            image=""
            content="лоравыждоаждоавыждорваыфждорфавыжоыавло ыар фжывдлор афжвыд оажфдвыл оажф лывофджыал офажы"
            openUpdateTask={openUpdateTask}
            setOpenUpdateTask={setOpenUpdateTask}
            title="Починить чайник"
            priority="Высокий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
            setCurrentTask={setCurrentTask}
          />
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
