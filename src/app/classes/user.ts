export class User {
  constructor(
    public name: string,
    public avatar: string,
    public blog: string,
    public github_html_link: string,
    public location: string,
    public bio: string,
    public twitter_username: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public created_at: Date,
    public company?: string,
  ) {}
}
