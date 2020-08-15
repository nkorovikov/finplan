import Category from '@/models/Category';
import Expense from "@/models/Expense";
import DateWrapper from '@/library/DateWrapper';

export default class ReportService {

    /**
     * 
     * @param {Array<Category>} categories 
     * @param {Array<Expense>} expenses
     * 
     * @returns {Array<number>} 
     */
    calculateLastWeek(categories: Array<Category>, expenses: Array<Expense>): Array<number> {
        let startOfNow = new Date().setHours(0, 0, 0, 0);
        let endOfNow = new Date().setHours(23, 59, 59, 59);

        const result: Array<number> = [];

        [...Array(7).keys()].forEach(() => {
            const sum = expenses
                .filter(a => {
                    const isOutcome = categories.find(
                        c => a.getCategoryId() === c.getId()
                    )?.getType() === 2;
                    const isUnderInterval =
                        a.getCreatedAt() <= endOfNow && a.getCreatedAt() >= startOfNow;

                    return isOutcome && isUnderInterval;
                })
                .map((e) => e.getSum())
                .reduce((sum, s) => sum + s, 0);

            result.push(sum);
            startOfNow = new Date(startOfNow).setDate(
                new Date(startOfNow).getDate() - 1
            );
            endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
        });

        return result.reverse();
    }

    /**
     * 
     * @param {Array<Category>} categories 
     * @param {Array<Expense>} expenses
     * @param {number} daysCount
     * 
     * @returns {Array<number>} 
     */
    calculateSumByDayCount(categories: Array<Category>, expenses: Array<Expense>, daysCount: number): number {
        let startOfNow = new Date().setHours(0, 0, 0, 0);
        let endOfNow = new Date().setHours(23, 59, 59, 59);

        let result = 0;

        [...Array(daysCount).keys()].forEach(() => {
            result += expenses
                .filter(a => {
                    const isOutcome = categories.find(
                        c => a.getCategoryId() === c.getId()
                    )?.getType() === 2;
                    const isUnderInterval =
                        a.getCreatedAt() <= endOfNow && a.getCreatedAt() >= startOfNow;

                    return isOutcome && isUnderInterval;
                })
                .map((e) => e.getSum())
                .reduce((sum, s) => sum + s, 0);
            startOfNow = new Date(startOfNow).setDate(
                new Date(startOfNow).getDate() - 1
            );
            endOfNow = new Date(endOfNow).setDate(new Date(endOfNow).getDate() - 1);
        });

        return result;
    }

    /**
     * 
     * @param {Array<Category>} categories 
     * @param {Array<Expense>} expenses
     * 
     * @returns {Array<number>} 
     */
    calculateSumByCurrentWeek(categories: Array<Category>, expenses: Array<Expense>): number {
        const dateWrapper = new DateWrapper()
        const startOfWeek = dateWrapper.getStartOfWeek(new Date());
        const endOfWeek = dateWrapper.getEndOfWeek(new Date());

        return expenses
            .filter(a => {
                const isOutcome = categories.find(
                    c => a.getCategoryId() === c.getId()
                )?.getType() === 2;
                const isUnderInterval =
                    a.getCreatedAt() <= endOfWeek && a.getCreatedAt() >= startOfWeek;

                return isOutcome && isUnderInterval;
            })
            .map((e) => e.getSum())
            .reduce((sum, s) => sum + s, 0);
    }

    /**
     * 
     * @param {Array<Category>} categories 
     * @param {Array<Expense>} expenses
     * 
     * @returns {Array<number>} 
     */
    calculateSumByCurrentMonth(categories: Array<Category>, expenses: Array<Expense>): number {
        const dateWrapper = new DateWrapper()
        const startOfMonth = dateWrapper.getStartOfMonth(new Date());
        const endOfMonth = dateWrapper.getEndOfMonth(new Date());

        return expenses
            .filter(a => {
                const isOutcome = categories.find(
                    c => a.getCategoryId() === c.getId()
                )?.getType() === 2;
                const isUnderInterval =
                    a.getCreatedAt() <= endOfMonth && a.getCreatedAt() >= startOfMonth;

                return isOutcome && isUnderInterval;
            })
            .map((e) => e.getSum())
            .reduce((sum, s) => sum + s, 0);
    }
}