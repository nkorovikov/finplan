export default class Profile {
    private name: string;
    private dailyBudget: number
    private weekBudget: number
    private monthBudget: number
    private locale: string

    public constructor(name: string, dailyBudget: number, weekBudget: number, monthBudget: number, locale: string) {
        this.name = name
        this.dailyBudget = dailyBudget
        this.weekBudget = weekBudget
        this.monthBudget = monthBudget
        this.locale = locale
    }

    public getLocale(): string {
        return this.locale
    }
}