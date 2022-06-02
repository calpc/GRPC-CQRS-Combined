export class HeroInfoEvent {
    constructor(
      public readonly heroId: string,
      public readonly id: string,
      public readonly name: string,
      public readonly heroName: string,
    ) {}
  }
  