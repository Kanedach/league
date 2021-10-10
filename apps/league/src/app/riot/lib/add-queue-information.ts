import { QueueName } from './queue-name';
import { Match } from '@league/api-interfaces';

export class AddQueueInformation {
  public addQue(matches: Match[]): Match[] {
    return matches.reduce((previous: any, current: any) => this.addQueueInformation(previous, current), []);
  }

  private addQueueInformation(previous: any, current: any): any {
    const queueName = new QueueName();
    return [
      ...previous,
      {
        ...current,
        queueInformation: queueName.queueName(current.queue),
      },
    ];
  }
}
