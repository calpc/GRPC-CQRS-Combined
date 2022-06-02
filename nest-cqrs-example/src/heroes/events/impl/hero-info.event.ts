export class HeroInfoEvent {
    constructor(
      public readonly fid: string,
      public readonly id: string, 
      public readonly fname: string,
      public readonly name: string = "new Name",
    ) {}
  }
  

