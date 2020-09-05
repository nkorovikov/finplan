export default class DateInitialized {
  initDate(): string {
    return (
      new Date().getFullYear() +
      (new Date().getMonth() + 1 > 10 ? "-" : "-0") +
      (new Date().getMonth() + 1) +
      (new Date().getDate() > 10 ? "-" : "-0") +
      new Date().getDate()
    );
  }

  prepareForSave(date: string): number {
    return new Date(
      new Date(date).toLocaleString("en-EN", {
        timeZone: "UTC",
      })
    ).getTime();
  }
}
