import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private baseApiUrl = '/users';

    constructor(private httpClient: HttpClient) {
    }

    public list(page: number = 0, size: number = 10) {
        return this.httpClient.get(this.baseApiUrl, {params: new HttpParams({fromObject: {page: page.toString(), size: size.toString()}})});
    }

    public getById(id: string) {
        return this.httpClient.get(this.baseApiUrl + '/' + id);
    }
}
