import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDragonCommand } from './commands/impl/kill-dragon.command';
import { KillHeroCommand } from './commands/impl/kill-heros.command';
import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
import { KillHerosDto } from './interfaces/kill-heros-dto.interface';
// import { KillHerosDto } from './interfaces/kill-heros-dto.interface';
import { Hero } from './models/hero.model';
import { GetHeroesQuery } from './queries/impl';

@Controller('hero')
export class HeroesGameController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/kill')
  async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
  }

  @Post('/:id/hero')
    async randomName(@Param('id') id: string, @Body() dto: KillHerosDto) {
        return this.commandBus.execute(new KillHeroCommand(id, dto.id));
    }
}
