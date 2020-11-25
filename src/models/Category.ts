import Model from "@/domain/abstract/models/Model";

export default class Category extends Model { // todo move to domain
  private id: number;
  private name: string;
  private type: number;
  private icon: string;

  public constructor(id: number, name: string, type: number, icon: string) {
    super();
    this.id = id;
    this.name = name;
    this.type = type;
    this.icon = icon;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }

  public getType(): number {
    return this.type;
  }

  public getIcon(): string {
    return this.icon;
  }
}
