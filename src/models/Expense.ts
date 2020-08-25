export default class Expense {
  private id: number;
  private sum: number;
  private categoryId: number;
  private createdAt: number;

  public constructor(
    id: number,
    sum: number,
    categoryId: number,
    createdAt: number
  ) {
    this.id = id;
    this.sum = sum;
    this.categoryId = categoryId;
    this.createdAt = createdAt;
  }

  public getId(): number {
    return this.id;
  }

  public getSum(): number {
    return this.sum;
  }

  public getCategoryId(): number {
    return this.categoryId;
  }

  public getCreatedAt(): number {
    return this.createdAt;
  }
}
