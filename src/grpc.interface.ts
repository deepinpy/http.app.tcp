import { Observable } from 'rxjs';

export interface IGrpcService{
    accmulate(numberArray: INumberArray): Observable<any>;
}

interface INumberArray{
    data: number[];
}