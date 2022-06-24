import {Observable} from 'rxjs';
import {LoggerService} from "./loggerService";
import {GoApi} from "../object-definitions/goapi-object";
import {ReturnObject} from "../object-definitions/return-object";

export class HttpService {

  private logger: LoggerService = new LoggerService();

  constructor(
  ) {
  }

  public httpGet(url: string, params?: string): Observable<any> {
    this.logger.max('httpService, httpGet, url: ', url);
    url = `${url}?${params}`;
    return new Observable(observer => {
      const xhr = new XMLHttpRequest();
      // Call a function when the state changes.
      xhr.onreadystatechange = function() {
        // console.log('httpService, onreadystatechange, this.readyState: ', this.readyState);
        if (this.readyState === XMLHttpRequest.DONE) {
          // console.log('onreadystatechange, we are complete, response: ', this.response);
          if (this.status === 200) {
            // console.log('----------- status: ', this.status);
            observer.next(JSON.parse(this.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      }
      xhr.open("GET", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send();
      // xhr.send(JSON.stringify(query));
    });

  }

  // public httpPost(url: string, query: GoApi): Observable<any[]> {
  //   url = `${environment.url.base}${url}`
  //
  //   const jsonPost = bindCallback($.post);
  //   const obs = jsonPost(url);
  //
  //   return obs;
  //
  // }


  public httpPost(url: string, query: GoApi): Observable<ReturnObject> {
    this.logger.max('httpService, httpPost, url: ', url);
    this.logger.max('httpService, httpPost, query: ', query);
    url = `${url}`
      return new Observable(observer => {
      const xhr = new XMLHttpRequest();
      // Call a function when the state changes.
      xhr.onreadystatechange = function() {
        // console.log('onreadystatechange, this.readyState: ', this.readyState);
        if (this.readyState === XMLHttpRequest.DONE) {
          // console.log('onreadystatechange, we are complete, response: ', this.response);
          if (this.status === 200) {
            observer.next(JSON.parse(this.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      }
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(query));
    });
    // return of(r);
  }
}
