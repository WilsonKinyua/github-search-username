import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ResponseDataService } from '../services/response-data.service';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css'],
})
export class SearchRepositoryComponent implements OnInit {
  // accessing the form inputs
  @ViewChild('f') searchRepoForm: NgForm;
  userRepositories;
  searchText: string;
  displayUserRepositoryList = false;
  displayUserErrorMessage = false;

  constructor(private userservice: ResponseDataService) {}

  ngOnInit(): void {}

  // search github user repositories
  searchGithubUserRepositories() {
    this.searchText = this.searchRepoForm.value.search;
    this.userservice.getUserRepositoryRequest(this.searchText).then(
      (response) => {
        this.userRepositories = this.userservice.userRepositories;
        this.displayUserRepositoryList = true;
      },
      (error) => {
        this.displayUserErrorMessage = true;
        console.log(error);
      }
    ); // end of searchGithubUserRepositories
  }
}
