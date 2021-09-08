import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {RiotApiMockInterceptor} from "./riot-api/riot.api.mock.interceptor";
import {DdragonApiMockInterceptor} from "./ddragon/ddragon.api.mock.interceptor";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RiotApiMockInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: DdragonApiMockInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MockInterceptorModule {

}
