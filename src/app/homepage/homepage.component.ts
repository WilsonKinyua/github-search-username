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
  userRepositories;
  constructor(private responseUserDataService: ResponseDataService) {}

  ngOnInit(): void {
    this.getUserDetails('wilsonkinyua');
    this.getUserRepositories('wilsonkinyua');
  }

  // user details
  getUserDetails(githubUsername) {
    this.responseUserDataService.getUserRequest(githubUsername).then(
      (response) => {
        this.userDetails = this.responseUserDataService.userGottenDetails;
      },
      (error) => {
        console.log(error);
      }
    ); // end of getUserRequest
  }

  // userRepositories
  getUserRepositories(githubUsername) {
    this.responseUserDataService.getUserRepositoryRequest(githubUsername).then(
      (response) => {
        this.userRepositories = this.responseUserDataService.userRepositories;
        console.log(this.userRepositories);
      },
      (error) => {
        console.log(error);
      }
    ); // end of getUserRepositoryRequest
  }
}
