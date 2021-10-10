import { MockedDataInterceptor } from '../mocked-data.interceptor';
import * as champion from './json/champion.json';

export class DdragonApiMockInterceptor extends MockedDataInterceptor {
  constructor() {
    super(new RegExp('/ddragon/'), [
      {
        urlRegExp: /champion/,
        computedBody: () => {
          return champion;
        },
      },
    ]);
  }
}
