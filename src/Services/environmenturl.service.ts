import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmenturlService {
  urlAddress: string = 'https://localhost:7174/api/';


  constructor() { }
}
