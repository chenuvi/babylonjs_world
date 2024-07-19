import { FreeCamera, Scene, Vector3 } from "babylonjs";
import type { GameOption } from "../../core/gameLogic";
export class GameCamera {
  private readonly option: GameOption;
  private readonly scene: Scene;
  private readonly vector: Vector3;
  private readonly camera: FreeCamera;
  readonly speed: number = 0.02;
  private rate: number = 10;
  private moveValue: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 };
  private maxJumpY: number = 0.25;
  private eachJumpY: number = 0.025;
  private eachFallY: number = 0.0075;
  private isJumpStart: boolean = false;
  private isJumpFall: boolean = false;

  constructor(scene: Scene, canvas: HTMLCanvasElement, option: GameOption) {
    this.scene = scene;
    this.option = option;
    this.vector = new Vector3(
      this.option.start.x,
      this.option.start.y,
      this.option.start.z
    );
    this.camera = new FreeCamera("Camera", this.vector, this.scene);
    this.camera.minZ = 0.1;
    this.camera.checkCollisions = true;
    this.camera.applyGravity = true;
    this.camera.setTarget(Vector3.Zero());
    this.camera.attachControl(canvas, true);
  }
}
