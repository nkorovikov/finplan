export default interface IChartOption {
  responsive: boolean;
  maintainAspectRatio: boolean;
  legend: {
    labels: {
      fontColor: string;
      fontSize: number;
      fontStyle: string;
    };
  };
}
