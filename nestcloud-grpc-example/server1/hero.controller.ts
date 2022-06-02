import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GetHeroInfo, GetHeroRequest, GetHeroResponse, Hero, ListHeroResponse } from './interfaces/hero.interface';

@Controller()
export class HeroController {
    private readonly heros: Hero[] = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }];
    private readonly temp: GetHeroInfo[] = [{ id: 1, name: 'John', ranking: 123 }, { id: 2, name: 'Doe', ranking: 456 }];

    @GrpcMethod('HeroService')
    get(data: GetHeroRequest): GetHeroResponse {
        console.log('server1 get invoked');
        return {
            hero: this.heros.find(({ id }) => id === data.id),
        };
    }

    @GrpcMethod('HeroService')
    list(): ListHeroResponse {
        console.log('server1 list invoked');
        return { heros: this.temp };
    }

    @GrpcMethod('HeroService')
    tempName(): ListHeroResponse {
        console.log('Server1 list invoked');
        return { heros: this.temp};
    }
}
