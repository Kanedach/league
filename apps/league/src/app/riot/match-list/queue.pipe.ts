import {Pipe, PipeTransform} from '@angular/core';
import queuesJson from "../../../assets/queues.json"

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
    // @ts-ignore
    return queuesJson.find(o => o.queueId === queueId).map
  }

}
