import { MockInterceptorModule } from '../app/mocks/mock-interceptor.module';
import { Provider } from '@angular/core';

export const environment = {
  production: false,
};

export const conditionalModules = [MockInterceptorModule];
export const conditionalProviders: Provider[] = [];
