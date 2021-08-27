import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../classes/user';
import { ResponseDataService } from '../services/response-data.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  userDetails;
  searchText: string;
  displayUserDetailContainer = false;
  displayGithubUserErrorNotFound = false;

  // accessing the form inputs
  @ViewChild('f') searchForm: NgForm;

  constructor(private userservice: ResponseDataService) {}

  ngOnInit(): void {}

  // search github user
  searchGithubUser() {
    this.searchText = this.searchForm.value.search;
    this.userservice.getUserRequest(this.searchText).then(
      (response) => {
          this.userDetails = this.userservice.userGottenDetails;
          this.displayUserDetailContainer = true;
      },
      (error) => {
        console.log(error);
        this.displayGithubUserErrorNotFound = true;
      }
    );

  }
}
