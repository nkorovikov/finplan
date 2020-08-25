import IChartDataset from "@/library/interfaces/IChartDataset";

export default interface IChartData {
  labels: Array<string>;
  datasets: Array<IChartDataset>;
}
