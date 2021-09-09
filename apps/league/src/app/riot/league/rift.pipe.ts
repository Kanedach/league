import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rift'
})
export class RiftPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'RANKED_SOLO_5x5': {
        return 'Ranked Solo/Duo';
        break;
      }
      case 'RANKED_TEAM_5x5': {
        return 'Ranked Team 5x5';
        break;
      }
      case 'RANKED_FLEX_SR': {
        return 'Ranked Flex';
        break;
      }
      default: {
        return 'Normal'
      }
    }
  }

}
