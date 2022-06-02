import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillHeroCommand } from '../impl/kill-heros.command';

@CommandHandler(KillHeroCommand)
export class KillHeroHandler implements ICommandHandler<KillHeroCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: KillHeroCommand) {
    console.log(clc.greenBright('KillDragonCommand...'));

    const { id } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(+id),
    );
    hero.newLogic(id);
    hero.commit();
  }
}