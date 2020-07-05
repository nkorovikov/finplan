export default class Expense {
    private id: number;
    private sum: number
    private category: string
    private createdAt: number

    public constructor(id: number, sum: number, category: string, createdAt: number) {
        this.id = id
        this.sum = sum
        this.category = category
        this.createdAt = createdAt
    }

    public getId(): number {
        return this.id
    }

    public getSum(): number {
        return this.sum
    }

    public getCreatedAt(): number {
        return this.createdAt
    }
}