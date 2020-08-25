import Category from "@/models/Category";
import Expense from "@/models/Expense";
import DateWrapper from "@/library/DateWrapper";
import IChartData from "@/library/interfaces/IChartData";

export default class ReportService {
  /**
   *
   * @param {Array<Category>} categories
   * @param {Array<Expense>} expenses
   *
   * @returns {Array<number>}
   */
  calculateLastWeek(
    categories: Array<Category>,
    expenses: Array<Expense>
  ): Array<number> {
    let startOfNow = new Date().setHours(0, 0, 0, 0);
    let endOfNow = new Date().setHours(23, 59, 59, 59);

    const result: Array<number> = [];

    [...Array(7).keys()].forEach(() => {
      const sum = expenses
        .filter((a) => {
          const isOutcome =
            categories
              .find((c) => a.getCategoryId() === c.getId())
              ?.getType() === 2;
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
  calculateSumByDayCount(
    categories: Array<Category>,
    expenses: Array<Expense>,
    daysCount: number
  ): number {
    let startOfNow = new Date().setHours(0, 0, 0, 0);
    let endOfNow = new Date().setHours(23, 59, 59, 59);

    let result = 0;

    [...Array(daysCount).keys()].forEach(() => {
      result += expenses
        .filter((a) => {
          const isOutcome =
            categories
              .find((c) => a.getCategoryId() === c.getId())
              ?.getType() === 2;
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
  calculateSumByCurrentWeek(
    categories: Array<Category>,
    expenses: Array<Expense>
  ): number {
    const dateWrapper = new DateWrapper();
    const startOfWeek = dateWrapper.getStartOfWeek(new Date());
    const endOfWeek = dateWrapper.getEndOfWeek(new Date());

    return expenses
      .filter((a) => {
        const isOutcome =
          categories.find((c) => a.getCategoryId() === c.getId())?.getType() ===
          2;
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
  calculateSumByCurrentMonth(
    categories: Array<Category>,
    expenses: Array<Expense>
  ): number {
    const dateWrapper = new DateWrapper();
    const startOfMonth = dateWrapper.getStartOfMonth(new Date());
    const endOfMonth = dateWrapper.getEndOfMonth(new Date());

    return expenses
      .filter((a) => {
        const isOutcome =
          categories.find((c) => a.getCategoryId() === c.getId())?.getType() ===
          2;
        const isUnderInterval =
          a.getCreatedAt() <= endOfMonth && a.getCreatedAt() >= startOfMonth;

        return isOutcome && isUnderInterval;
      })
      .map((e) => e.getSum())
      .reduce((sum, s) => sum + s, 0);
  }

  getByCategoriesChartData(
    categories: Array<Category>,
    expenses: Array<Expense>,
    dateRange: Array<string>
  ): IChartData {
    const labels: Array<string> = [];
    const data: Array<number> = [];
    categories.forEach((c: Category) => {
      const expensesFiltered = expenses.filter((expense: Expense) => {
        if (expense.getCategoryId() !== c.getId()) {
          return false;
        }

        if (dateRange.length === 0 || dateRange.length === 1) {
          return true;
        }

        const from = new Date(
          new Date(dateRange[0]).toLocaleString("en-EN", {
            timeZone: "UTC",
          })
        ).getTime();

        const to = new Date(
          new Date(dateRange[1]).toLocaleString("en-EN", {
            timeZone: "UTC",
          })
        ).getTime();

        if (expense.getCreatedAt() >= from && expense.getCreatedAt() <= to) {
          return true;
        }

        return false;
      });
      let sum = 0;
      expensesFiltered.forEach((e: Expense) => {
        sum += e.getSum();
      });

      if (sum === 0) {
        return;
      }

      labels.push(c.getName());
      data.push(sum);
    });

    return {
      labels: labels,
      datasets: [
        {
          borderColor: "#00E5FF",
          backgroundColor: [
            "#FFD0B0",
            "#FFC0A0",
            "#FFB090",
            "#FFA080",
            "#FF9070",
            "#FF8060",
            "#FF7050",
            "#FF6040",
          ],
          data: data,
        },
      ],
    };
  }
}
