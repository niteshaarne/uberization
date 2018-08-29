import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient) { }
        
    save(user:User):Observable<User> {
        return this.httpClient.post<User>('http://10.0.0.10:8080/rest/authenticateUser', user, {
            headers:new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        });
    }
}