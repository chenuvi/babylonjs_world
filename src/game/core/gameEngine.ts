import { Engine } from "babylonjs";
import { GameWindow } from "./gameWindow";
import type { GameLogic } from "./gameLogic";
export class GameEngine {
  private readonly container: HTMLDivElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly logic: GameLogic;
  private readonly engine: Engine;
  private readonly window: GameWindow;

  private loopFunc?: () => void;

  constructor(
    container: HTMLDivElement,
    touchButtons: HTMLDivElement[],
    gameLogic: GameLogic
  ) {
    this.container = container;
    this.canvas = document.createElement("canvas");
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.container.appendChild(this.canvas);
    this.logic = gameLogic;
    /**
     * 参数详细含义
     * this.canvas: 渲染引擎将使用的 HTMLCanvasElement。
     * true: 启用抗锯齿。
     * preserveDrawingBuffer: 保留绘图缓冲区，防止在渲染后清除。通常用于需要保存渲染结果的情况。
     * stencil: 启用模板缓冲区，用于复杂的渲染效果，如多重渲染通道。
     * disableWebGL2Support: 禁用 WebGL 2 支持。设置为 false 表示启用 WebGL 2 支持。
     */
    this.engine = new Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      disableWebGL2Support: false,
    });
    this.window = new GameWindow(this.container, touchButtons, this.engine);
    this.init();
    this.loop();
  }

  private init(): void {
    this.logic.create(this.engine, this.canvas);
  }

  private loop(): void {
    this.loopFunc = () => {};
  }
}
