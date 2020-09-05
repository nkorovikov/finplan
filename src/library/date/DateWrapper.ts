export default class DateWrapper {

    /**
     * 
     * @param {string|Date} d
     * 
     * @returns {number}
     */
    getStartOfWeek(d: string | Date): number {
        const date = new Date(d);
        const day = date.getDay(),
            diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff)).setHours(0, 0, 0, 0);
    }

    /**
     * 
     * @param {string|Date} d
     * 
     * @returns {number}
     */
    getEndOfWeek(d: string | Date): number {
        const date = new Date(d);
        const day = date.getDay(),
            diff = date.getDate() + 7 - (day === 0 ? 7 : day);
        return new Date(date.setDate(diff)).setHours(23, 59, 59, 59);
    }

    /**
     * 
     * @param {string|Date} d
     * 
     * @returns {number}
     */
    getStartOfMonth(d: string | Date): number {
        return new Date(new Date(d).setDate(1)).setHours(0, 0, 0, 0);
    }

    /**
     * 
     * @param {string|Date} d
     * 
     * @returns {number}
     */
    getEndOfMonth(d: string | Date): number {
        const month = new Date(d).getMonth()
        return new Date(new Date(new Date().setMonth(month + 1)).setDate(0)).setHours(23, 59, 59, 59);
    }
}
