export default interface IStorage {
    getData(): any
    syncData(data: any): void
}