export class Post {
  public edited: boolean = false;
  public date: Date = new Date;
  constructor (public title: string, public text: string){}
}
