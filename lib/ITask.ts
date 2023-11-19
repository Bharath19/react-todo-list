import { Dispatch, SetStateAction } from "react";

export type ITaskList = {
    id: number,
    value: string;
}

export type ITaskListProps = {
    taskList: ITaskList[],
    setTaskList: Dispatch<SetStateAction<any[]>>
}

export type IEditTask = {
    [key: string]: boolean;
};