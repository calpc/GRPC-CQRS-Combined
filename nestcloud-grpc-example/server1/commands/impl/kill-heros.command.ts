export class KillHeroCommand {
    constructor(
      public readonly id: number,
      public readonly name: string,
      public readonly ranking: number
    ) {}
  }