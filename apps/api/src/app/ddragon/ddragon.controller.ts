import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DDChampion } from '../../../../../libs/api-interfaces/src/lib/ddragon-interface';
import { map } from 'rxjs/operators';
import { DDragonService } from './ddragon.service';

@Controller('ddragon')
export class DdragonController {
  constructor(private readonly ddragonService: DDragonService) {}

  @Get('version')
  getVersion(): Observable<string[]> {
    return this.ddragonService.getDDragonVersion().pipe(map((res) => res.data));
  }

  @Get('champion/:version')
  getChamp(@Param('version') version: string): Observable<DDChampion> {
    return this.ddragonService.getDDragonChampion(version).pipe(
      map((res) => ({
        version: res.data.version,
        format: res.data.format,
        type: res.data.type,
        data: Object.values(res.data.data),
      }))
    );
  }

  @Get('champion')
  getC(): Observable<DDChampion> {
    return this.ddragonService.getChampion().pipe(
      map((res) => {
        return {
          version: res.data.version,
          format: res.data.format,
          type: res.data.type,
          data: Object.values(res.data.data),
        };
      })
    );
  }
}
