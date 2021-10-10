import {Injectable} from "@angular/core";
import {HttpService} from "@nestjs/axios";

@Injectable({
  providedIn: 'root'
})
export class RiotMatchService {
  constructor(private  httpService: HttpService) {
  }



}
