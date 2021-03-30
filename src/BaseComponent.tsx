// import classnames from "classnames";
import * as React from "react";

// import Store from "../models/Store";

import Task from "./Task";

export default abstract class BaseComponent<P, S> extends React.Component<P, S> {

    // protected get store() { return (window as any).store as Store; }

    protected get task() { return (window as any).task as Task; }

    /**
     * 执行一个长时间的任务。成功失败应该都有提示。
     * @param commandName 任务名字
     * @param command 任务函数
     */
    protected async run(commandName: string, command: () => Promise<any>) {
        this.task.run(commandName, command);
    }

    /**
     * https://github.com/JedWatson/classnames
     */
    // public get classnames() { return classnames; }
}