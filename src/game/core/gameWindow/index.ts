import type { Engine } from "babylonjs";
// import { Keyboard, type KeyType } from "./interaction/keyboard";
import { TouchPad, type TouchType } from "./interaction/touchPad";
export class GameWindow {
  private readonly container: HTMLDivElement;
  private readonly engine: Engine;
  private readonly keyboard: Keyboard;
  private readonly touchpad: Touchpad;

  constructor(
    container: HTMLDivElement,
    touchButtons: Array<HTMLDivElement>,
    engine: Engine
  ) {
    this.container = container;
    this.engine = engine;
    this.touchpad = new TouchPad(touchButtons);
  }
}
