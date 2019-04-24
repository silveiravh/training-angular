import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {
    
    /*
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    listFromUser(userName) {
        this.http
    }

    */

    constructor(private http: HttpClient) {

    }

    listFromUser(userName: string) {
        return this.http
        .get<Photo[]>(API + '/' + userName + '/photos');
    }
}