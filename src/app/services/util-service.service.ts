import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {
  private data: any;
  constructor() { }
  public getData<Object>() {
    return <Object>this.data;
  }
  public setData(data: any) {
    this.data = data;
  }

}
