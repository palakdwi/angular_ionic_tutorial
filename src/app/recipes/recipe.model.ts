export class Recipe{
  constructor(
  public activeStatus: boolean,
  public category: string,
  public createdAt: Date,
  public description: string,
  public imageCover: string,
  public images: string[],
  public ingredients: string[],
  public modifiedAt: Date,
  public name: string,
  public prepTime: number,
  public shared: boolean,
  public id: string
  ){}
}