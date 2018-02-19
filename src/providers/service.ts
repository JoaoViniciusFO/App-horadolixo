import { Http, Headers, RequestOptions } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class Service{
    constructor(private http: Http){

    }
    public setNewUser(user): Observable <any>{

        let headers = new Headers({
            "access-control-allow-origin": "*",
            "content-type": "application/json"
        });

        let options = new RequestOptions({ headers: headers });
        return this.http.post("https://limitless-anchorage-11992.herokuapp.com/api/user", user)
    }
}