import Category from '@/models/Category';
import Expense from "@/models/Expense";

export default class ReportService {
    calculateLastWeek(categories: Array<Category>, expenses: Array<Expense>): Array<number> {
        let startOfNow = new Date().setHours(0, 0, 0, 0);
        let endOfNow = new Date().setHours(23, 59, 59, 59);

        const result: Array<number> = [];

        [...Array(7).keys()].forEach(() => {
            let sum = 0;
            expenses
                .filter(a => {
                    const isOutcome = categories.find(
                        c => a.getCategoryId() === c.getId()
                    );
                    const isUnderInterval =
                        a.getCreatedAt() < endOfNow && a.getCreatedAt() > startOfNow;

                    return isOutcome && isOutcome.getType() && isUnderInterval;
                })
                .forEach(a => {
                    sum += a.getSum();
                });
            result.push(sum);
            startOfNow = new Date(startOfNow).setDate(
                new Date(startOfNow).getDate() - 1
            );
            endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
        });

        return result.reverse();
    }

    calculateSumByDayCount(categories: Array<Category>, expenses: Array<Expense>, daysCount: number): number {
        let startOfNow = new Date().setHours(0, 0, 0, 0);
        let endOfNow = new Date().setHours(23, 59, 59, 59);

        let result = 0;

        [...Array(daysCount).keys()].forEach(() => {
            expenses
                .filter(a => {
                    const isOutcome = categories.find(
                        c => a.getCategoryId() === c.getId()
                    );
                    const isUnderInterval =
                        a.getCreatedAt() < endOfNow && a.getCreatedAt() > startOfNow;

                    return isOutcome && isOutcome.getType() && isUnderInterval;
                })
                .forEach(a => {
                    result += a.getSum();
                });
            startOfNow = new Date(startOfNow).setDate(
                new Date(startOfNow).getDate() - 1
            );
            endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
        });

        return result;
    }
}