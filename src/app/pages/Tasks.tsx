import { FaPlus } from "react-icons/fa6";
import Button from "../ui/global/Button";
import { FaHistory } from "react-icons/fa";
import TaskBlock from "../ui/Tasks/TaskBlock";
import TaskTemplate from "../ui/Tasks/TaskTemplate";
import { useState } from "react";
import ModalWindow from "../ui/global/ModalWindow";
import CreateTask from "../ui/Tasks/CreateTask";

export default function Tasks() {
  const [visibleCreateTask, setVisibleCreateTask] = useState(false);
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
        <TaskBlock nameCol="Отложенные задачи" count={0}>
          <TaskTemplate
            title="Починить чайник"
            priority="Высокий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
          <TaskTemplate
            title="Починить чайник"
            priority="Средний"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
          <TaskTemplate
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
          <TaskTemplate
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
          <TaskTemplate
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
          <TaskTemplate
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
        </TaskBlock>

        <TaskBlock nameCol="Текущие задачи" count={0}>
          <TaskTemplate
            title="Починить чайник"
            priority="Средний"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
        </TaskBlock>

        <TaskBlock nameCol="Выполненные задачи" count={0}>
          <TaskTemplate
            title="Починить чайник"
            priority="Низкий"
            createdAt={Date.now()}
            plannedDate={23 / 23 / 2001}
          />
        </TaskBlock>
      </div>

      <ModalWindow isShow={visibleCreateTask}>
        <CreateTask setCreateModal={setVisibleCreateTask} />
      </ModalWindow>
    </div>
  );
}
