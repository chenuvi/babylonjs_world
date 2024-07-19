export class TouchPad {
  private readonly touchButtons: Array<HTMLDivElement>;

  constructor(touchButtons: HTMLDivElement[]) {
    this.touchButtons = touchButtons;
  }
}

export type TouchType =
  | "move-front"
  | "move-back"
  | "move-left"
  | "move-right"
  | "move-up"
  | "move-down";
