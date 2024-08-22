import { Data } from "./data.types";

export class Processor {
  private y: Data[] = [];

  public z(d: Data): void {
      this.y.push(d);
  }

  public w(): number {
      let r = 0;

      for (const i of this.y) {
          for (const j of i.c) {
              r += j * i.b;
          }
      }

      return r;
  }

  public v(): string[] {
      return this.y.map(i => i.a);
  }
}