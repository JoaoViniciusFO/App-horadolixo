import { Http, Headers, RequestOptions } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class Service{
    public endPoint: string;
    constructor(private http: Http){
        this.endPoint = "http://192.168.1.244:5000/api";
        //this.endPoint = "https://limitless-anchorage-11992.herokuapp.com/api";
    }
    public setNewUser(user): Observable <any>{

        let headers = new Headers({
            "access-control-allow-origin": "*",
            "content-type": "application/json"
        });

        let options = new RequestOptions({ headers: headers });
        return this.http.post(`${this.endPoint}/user`, user)
    }

    public getGroupList(): Observable<any>{
        return this.http.get(`${this.endPoint}/get-groups`)
    }

    public getIfExists(id): Observable<any>{
        return this.http.get(`${this.endPoint}/user-id-dvc/${id}`)
    }
}