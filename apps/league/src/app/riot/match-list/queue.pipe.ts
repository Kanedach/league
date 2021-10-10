import { Pipe, PipeTransform } from '@angular/core';
import queuesJson from '../../../assets/queues.json';
import {QueID} from "@league/api-interfaces";

export interface Queues {
  queueId: number;
  map: string;
  description: string;
}

@Pipe({
  name: 'queue'
})
export class QueuePipe implements PipeTransform {

  transform(queueId: number): string {
    return this.findQueue(queueId);
  }

  private findQueue(queueId: number): string {
    const queIds: QueID[] | null = queuesJson ?? null;
    const id: number | null = queueId ?? null;
    return queIds.find((o:QueID):boolean => o?.queueId === id ?? '')?.map ?? '';
  }
}
