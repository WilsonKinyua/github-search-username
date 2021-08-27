import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { ResponseDataService } from '../services/response-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userDetails: User;
  constructor(private responseUserDataService: ResponseDataService) {}

  ngOnInit(): void {
    this.getUserDetails('wilsonkinyua');
  }

  getUserDetails(githubUsername) {
    this.responseUserDataService
      .getUserRequest(githubUsername)
      .then((response) => {
        console.log(this.responseUserDataService.userGottenDetails);
        this.userDetails = this.responseUserDataService.userGottenDetails;
      });
  }
}
