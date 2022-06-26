import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SiteUpdateService {
  resourceUrl = 'https://bre-line.com/wp-transport-rest/';

  constructor(@Inject(HttpClient) private http: HttpClient) {}
  getStatus(data: any) {
    return this.http.post(this.resourceUrl, data).pipe(map((res) => res));
    //return this.http.get(this.resourceUrl + '?token=sVR7nTA3O8S01XciOrjB5Y3vplzxLtBok&action=get_details&' + trackCodes).pipe(map(res => res));
  }
  update(data: any) {
    return this.http.post(this.resourceUrl, data).pipe(map((res) => res));
  }
}
