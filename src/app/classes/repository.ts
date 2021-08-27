export class Repository {
  constructor(
    public repo_name: string,
    public repo_url: string,
    public description: string,
    public created_date: Date,
    public language?: string
  ) {}
}
