import { Component, Inject, OnInit } from '@angular/core';
import { SiteUpdateService } from './framework/services/site-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'siteUpdateApp';
  constructor(
    @Inject(SiteUpdateService) private siteUpdateService: SiteUpdateService
  ) {}
  ngOnInit(): void {
    let myData = {
      token: 'sVR7nTA3O8S01XciOrjB5Y3vplzxLtBok',
      action: 'get_details',
      track_code: 1231512,
    };
    this.siteUpdateService.getStatus(myData).subscribe((res) => {
      console.log(res);
    });
  }
}
