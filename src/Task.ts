// import message from "antd/lib/message";
import * as _ from "lodash";
import * as mobx from "mobx";

/**
 * executing的任务池。必需静态，因为要多个组件的实例共享。
 */
const Pool: Map<string, () => Promise<any>> = new Map<string, () => Promise<any>>();

export default class Task {

    @mobx.computed
    public get isRunning() { return this.$isRunning; }
    @mobx.observable
    private $isRunning: boolean = false;

    @mobx.computed
    public get taskName() { return this.$taskName; }
    @mobx.observable
    private $taskName: string = null;

    public async run(commandName: string, command: () => Promise<any>) {
        if (Pool.size === 0) {
            this.$isRunning = true;
        }
        this.$taskName = commandName ? `正在${commandName} ...` : null;

        let taskStartTime = Date.now();
        let id = _.uniqueId();
        if (Pool.has(id)) {
            console.warn("任务ID重复了，本次任务无法执行");
        } else {
            Pool.set(id, command);
        }
        try {
            console.log(`开始任务：【${id}】${commandName} | 任务池有 ${Pool.size} 个任务正在执行`);
            console.time(id);
            if (commandName === "") {
                // console.trace();
            }

            // 执行命令
            await command();

        } catch (err) {
            let errorMessage = `${commandName}出错`;
            console.warn(err, errorMessage);
            // 如果出错，一定要提示用户，不能什么也不说
            // alert(errorMessage);
        } finally {
            Pool.delete(id);
            // 如果这是最后一个任务，那就关闭遮罩
            if (Pool.size === 0) {
                this.$isRunning = false;
                this.$taskName = null;
            }
            let taskEndTime = Date.now();
            console.log(`完成任务：【${id}】${commandName} | 运行时间：${((taskEndTime - taskStartTime) / 1000).toFixed(2)} 秒 | 还有 ${Pool.size} 个任务在运行`);
        }
    }
}