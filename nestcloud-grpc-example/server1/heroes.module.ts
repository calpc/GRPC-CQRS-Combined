import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { HeroController } from './hero.controller';
import { QueryHandlers } from './queries/handlers';
import { HeroRepository } from '././repository/hero.respository';
import { HeroesGameSagas } from './sagas/heroes.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [HeroController],
  providers: [
    HeroRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    HeroesGameSagas,
  ],
})
export class HeroesGameModule {}
