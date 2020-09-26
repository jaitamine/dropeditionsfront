import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable()
export class UserService {
    private host = 'http://localhost:8086';
    private jwtToken = null;
    private roles: any[] = [];
    private isConnected: boolean; //boolean to track the state of connection
    constructor(private http: HttpClient) {}

    login(user) {
        //    observe response pour ne pas convertir l'objet en json et recuperer directement la requete
        return this.http.post(this.host + '/login', user, { observe: 'response'});

    }
    saveToken(jwt: string) {

        localStorage.setItem('token', jwt);
        // tslint:disable-next-line:prefer-const
        let jwtHelper: JwtHelperService = new JwtHelperService();
        this.jwtToken = jwt;
        console.log(this.jwtToken);
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles;


    }

    getTasks() {
        // tslint:disable-next-line:curly
        if (this.jwtToken == null) this.loadToken();
        // tslint:disable-next-line:object-literal-key-quotes
        return this.http.get(this.host + '/tasks', { headers: new HttpHeaders({ 'Authorization': this.jwtToken }) });
    }

    loadToken() {

        this.jwtToken = localStorage.getItem('token');
    }

    logout() {

        this.jwtToken = null;
        localStorage.removeItem('token');
        this.isConnected = false;
    }

    isAdmin() {

        // tslint:disable-next-line:prefer-const
        for (let r of this.roles) {

            if (r.authority === 'ADMIN') { return true; }
        }
        return false;

    }

    isUser(){

        this.loadToken();
        let jwtHelper: JwtHelperService = new JwtHelperService();
        console.log(this.jwtToken);
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles;

        for (let r of this.roles) {

            if (r.authority === 'USER') { return true; }
        }
        return false;
    }

    saveTask(task) {
        // tslint:disable-next-line:object-literal-key-quotes
        return this.http.post(this.host + '/tasks', task, { headers: new HttpHeaders({ 'Authorization': this.jwtToken }) });



    }
    register(user) {
        console.log(user);
        return this.http.post(this.host + '/user/register', user);
        
    }

    getRoles(){

        this.loadToken();
        let jwtHelper: JwtHelperService = new JwtHelperService();
        console.log(this.jwtToken);
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
        console.log("roles are " + this.roles[0].authority)
    }

    getConnected(){

        return this.isConnected;
    }

    setConnected(connected){

        this.isConnected = connected;
    }

    //get a user by his email from the token
    getUser() {
        
        if (this.jwtToken == null) this.loadToken();
        let jwtHelper: JwtHelperService = new JwtHelperService();
        
        let userEmail = jwtHelper.decodeToken(this.jwtToken).sub;
        console.log("email is " + userEmail);
        
        return this.http.get(this.host + '/user/oneUser/'+ userEmail, { headers: new HttpHeaders({ 'Authorization': this.jwtToken }) });
    }

}