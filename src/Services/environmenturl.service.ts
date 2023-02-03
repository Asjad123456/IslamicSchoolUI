import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmenturlService {
  urlAddress: string = environment.ApiUrl;


  constructor() { }
}
