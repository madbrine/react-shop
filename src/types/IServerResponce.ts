export interface IServerResponce<T> {
    products: T;
    limit: number;
    skip: number;
    total: number;
}