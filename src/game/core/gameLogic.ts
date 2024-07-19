import { Engine, Scene, Vector3 } from "babylonjs";
import { GameCamera } from "../world/models/camera";

export class GameLogic {
  private readonly option: GameOption;
  private scene?: Scene;
  private camera?: GameCamera;
  private mainland?: Mainland;

  constructor(option: GameOption) {
    if (option.visualField >> 1 !== 0) {
      option.visualField -= 1;
    }
    this.option = option;
  }

  public create(engine: Engine, canvas: HTMLCanvasElement): void {
    this.scene = new Scene(engine);
    this.scene.gravity = new Vector3(0, -0.1, 0);
    this.scene.collisionsEnabled = true;
    this.camera = new GameCamera(this.scene, canvas, this.option);
    this.mainland = new 
  }

  public input(): void {}

  public update(): void {}

  public render(): void {}
}

export type GameOption = {
  seed: number;
  start: { x: number; y: number; z: number };
  bounds: {
    topLeft: {
      x: number;
      z: number;
    };
    bottomRight: {
      x: number;
      z: number;
    };
  };
  visualField: number;
  frameUpdateBlock: number;
};
