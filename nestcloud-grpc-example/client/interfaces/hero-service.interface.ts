import { Observable } from 'rxjs';
import { GetHeroRequest, GetHeroResponse, ListHeroResponse, postHeroResponse } from './hero.interface';

export interface HeroService {
    get(data: GetHeroRequest): Observable<GetHeroResponse>;

    list(data: any): Observable<ListHeroResponse>;

    tempName(data: any): Observable<ListHeroResponse>;

    // randomName(data: GetHeroRequest): Observable<postHeroResponse>;
}
