export default class Category {
    private id: number;
    private name: string
    private type: number
    private cssClass: string

    public constructor(id: number, name: string, type: number, cssClass: string) {
        this.id = id
        this.name = name
        this.type = type
        this.cssClass = cssClass
    }

    public getId(): number {
        return this.id
    }

    public getType(): number {
        return this.type
    }
}