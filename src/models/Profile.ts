export default class Profile {
    private name: string;
    private dailyBudget: number
    private weeklyBudget: number
    private monthlyBudget: number
    private locale: string

    public constructor(name: string, dailyBudget: number, weeklyBudget: number, monthlyBudget: number, locale: string) {
        this.name = name
        this.dailyBudget = dailyBudget
        this.weeklyBudget = weeklyBudget
        this.monthlyBudget = monthlyBudget
        this.locale = locale
    }

    public getName(): string {
        return this.name
    }

    public getDailyBudget(): number {
        return this.dailyBudget
    }

    public getWeeklyBudget(): number {
        return this.weeklyBudget
    }

    public getMonthlyBudget(): number {
        return this.monthlyBudget
    }

    public getLocale(): string {
        return this.locale
    }
}