
// import bowser from "bowser";
import { times } from "lodash";
import remove from "lodash/remove";
import * as mobx from "mobx";

// import { Launcher, THREE, TWEEN } from "../vendor/core/index";

// import AppManager from "./AppManager";
// import { ILayerItemMeta, ILayerMeta } from "./meta/types";
// import { Progressbar } from "./Progressbar";
// import Service from "./Service";
// import Step from "./Step";
// import { excuteAction } from "./Utils";

declare const __IS_DEBUG__: boolean;

const ModelPath = "http://blade-v2.xuanke3d.com/apis/assets/arrow/2021-03/02/b75b9a8c-5455-46e9-b9ed-b725a9e04ccb";
// const ModelPath = __IS_DEBUG__ ? "http://blade-v2.xuanke3d.com/apis/assets/arrow/2021-03/02/b75b9a8c-5455-46e9-b9ed-b725a9e04ccb" : "models/p40";

export default class Store {

    @mobx.observable
    public asp = window.innerWidth / window.innerHeight;

    public core;
    @mobx.observable
    public isLoading = true;

    @mobx.observable
    public isShowMenu = true;

    @mobx.observable
    public showButton: boolean = false;

    @mobx.observable
    public showImage: boolean = false;

    // @mobx.observable
    // public api: Service = new Service();

    @mobx.computed
    public get isFunc() { return this.$isFunc; }
    @mobx.observable
    public $isFunc: boolean = false;

    @mobx.computed
    public get isMobile() {
        return !this.$isBigSize;
    }
    // @mobx.observable
    // public $isMobile: boolean = bowser.mobile !== undefined;

    public get isBigSize() {
        return this.$isBigSize;
    }
    @mobx.observable
    public $isBigSize: boolean = false;
    // @mobx.observable
    // public appManager: AppManager = null;

    @mobx.observable
    public showFuctionButton: boolean = false;

    @mobx.observable
    public isReady = false;

    // public progress: Progressbar = null;

    // public createProgress(dom) {
    //     this.progress = new Progressbar(dom);
    //     this.progress.updateP(0.6, 3000);
    // }
    constructor() {
        // this.appManager = new AppManager(this);
    }

    // @mobx.observable
    // public steps: Step[] = [];

    // @mobx.observable
    // public activeStep: Step = null;

    // public async switchStep(step: Step = null) {
    //     console.log(step, "ssssppp");
    //     if (this.activeStep === step) {
    //         return;
    //     }
    //     if (this.activeStep) {
    //         console.log(this.activeStep, "a????");
    //         await this.activeStep.leave();
    //     }
    //     if (step) {
    //         step.enter();
    //     } else {
    //         console.log(this.core.camera, "pppppppp");
    //         this.core.camera.flyTo(0, 0, 0, 0, 1);
    //         // if (!this.activeStep) {
    //         //     this.core.camera.lockMove();
    //         // }
    //     }
    //     // this.core.camera.unlock();

    //     this.core.engine.makeDirty();
    //     this.activeStep = step;
    // }

    @mobx.observable
    public layers: Layer[] = [];

    public async init(dom) {
        // await this.appManager.load();
        // console.log(this.appManager);
        // this.core = await Launcher.launch({
        //     modelPath: this.appManager.modelPath,
        //     container: dom,
        //     cb: (progress) => {
        //         if (progress !== Infinity && progress < 80) {
        //             this.progress.updateP(progress / 100, 500);
        //         }
        //     },
        // });
        // let data = await this.api.loadScene();
        // console.log(data, "data");
        // for (const item of data.layers) {
        //     this.layers.push(new Layer(item));
        // }
        // console.log(data, "data");
        // for (const action of data.settings.enter.actions) {
        //     await excuteAction(action, this.core, this.layers);
        // }
        // // await this.progress.updateP(1, 1500);
        // // await this.progress.back();

        // for (const step of data.steps) {
        //     this.steps.push(new Step(this, step));
        // }

        // this.steps.push(new LookStep(this, {
        //     id: "外观", name: "外观", icon: "icomoon icon-dishwasher"
        // }));
        // this.steps.push(new CapacityStep(this, {
        //     id: "容量", name: "容量", icon: "icomoon icon-capacity"
        // }));
        // this.steps.push(new FuncStep(this, {
        //     id: "功能", name: "功能", icon: "icomoon icon-fuction"
        // }));
        // this.steps.push(new SizeStep(this, {
        //     id: "尺寸", name: "规格", icon: "icomoon icon-size"
        // }));
        // for (const step of this.steps) {
        //     await step.init();
        // }
        // this.steps.forEach(i => i.init());
        // this.switchStep(this.steps[0]);
        this.isLoading = false;
        console.log(this.isLoading, "?????");
    }
}

// tslint:disable-next-line: max-classes-per-file
export class Layer {
    public id: string;
    public name: string;
    @mobx.observable
    public items: LayerItem[] = [];
    @mobx.observable
    public visible: boolean = false;
    // constructor(public readonly meta: ILayerMeta) {
    //     console.log(meta, "mmmmm");
    //     this.id = meta.id;
    //     this.name = meta.name;
    //     for (const item of meta.items) {
    //         this.items.push(new LayerItem(item));
    //     }
    // }
    public visit(cb: (node: any) => void) {
        cb(this);
        this.items.forEach((i) => i.visit(cb));
    }
}
// tslint:disable-next-line: max-classes-per-file
export class LayerItem {
    public id: string;
    public name: string;
    @mobx.observable
    public visible: boolean = false;
    public image: string;
    @mobx.observable
    public enter: any = {};
    @mobx.observable
    public leave: any = {};

    // constructor(public readonly meta: ILayerItemMeta) {
    //     this.id = meta.id;
    //     this.name = meta.name;
    //     this.enter = meta.enter;
    //     this.leave = meta.leave;
    //     // this.image = meta.image;
    // }

    public visit(cb: (node: any) => void) {
        cb(this);
    }
}
