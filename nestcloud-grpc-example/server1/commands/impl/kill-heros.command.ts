export class KillHeroCommand {
    constructor(
      public readonly id: number,
      public readonly name: string = 'HELLO',
      public readonly ranking: number
    ) {}
  }