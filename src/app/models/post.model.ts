export class Post {
  public edited: boolean = false;
  public date: string = Date();
  constructor (public title: string, public text: string){}
}
