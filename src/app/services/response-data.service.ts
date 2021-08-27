import { Repository } from './../classes/repository';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResponseDataService {
  userGottenDetails: User;
  repository: Repository;

  constructor(private http: HttpClient) {
    this.userGottenDetails = new User(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      new Date(),
      ''
    );
  }

  // get user
  getUserRequest(githubUsername) {
    interface ApiUserResponse {
      name: string;
      avatar_url: string;
      blog: string;
      html_url: string;
      location: string;
      bio: string;
      twitter_username: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
      company?: string;
    }
    let userPromise = new Promise<void>((resolve, reject) =>
      this.http
        .get<ApiUserResponse>(
          environment.apiUrl +
            '/' +
            githubUsername +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (response) => {
            console.log(response);
            this.userGottenDetails = response;
            console.log(this.userGottenDetails);
            resolve();
          },
          (error) => {
            reject(error);
            console.log(error);
          }
        )
    );
    return userPromise;
  }
}
