import type { Scene, MeshBuilder, Color3 } from "babylonjs";
import type { GameOption } from "@/game/core/gameLogic";
export class Mainland {
  // 参数
  private readonly option: GameOption;
  private readonly visualField: number;
  private readonly frameUpdateBlock: number;
  private readonly groundArrayLength: number;
  private readonly terrainPerlinNoise1: PerlinNoiseGenerator;
  private readonly terrainPerlinNoise2: PerlinNoiseGenerator;
  // 实例
  private readonly scene: Scene;
  private readonly camera: GameCamera;
  private readonly materialLib: MaterialMgr;
  private readonly blockLib: BlockMgr;
  private readonly light: Light;
  private readonly sky: Sky;
  // 存储
  private lastPosition: { x: number; y: number; z: number };
  private groundBlocksData: Array<
    Array<{
      x: number;
      y: number;
      z: number;
      show: boolean;
      blocks: Array<AbstractBlock>;
    }>
  > = [];
  private removeBlocks: Array<Array<AbstractBlock>> = [];

  
}
