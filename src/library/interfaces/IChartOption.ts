// eslint-disable-next-line @typescript-eslint/interface-name-prefix
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
