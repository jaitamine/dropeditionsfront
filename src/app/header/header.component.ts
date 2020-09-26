import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
//import { MatDialogRef } from '@angular/material/dialog/typings/dialog-ref';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userService.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(public dialog: MatDialog, public router:Router, private userService : UserService) { }

  ngOnInit() {

    this.userService.setConnected(this.userService.isUser());
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(Login);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  contact(){
    this.router.navigate(["/contact"]);
  }

  onLogout() {

    this.userService.logout();
    //this.isConnected = false;
    this.router.navigate(['/']);


  }
  
}
@Component({
  selector: 'Login',
  templateUrl: 'login.html',
  styleUrls: ['./login.component.css']
})
export class Login{

  mode :number;

  constructor(public router:Router, private userService : UserService, public dialogRef: MatDialogRef<Login>){}

  signup(){
    this.router.navigate(["/signup"]);
  }
  forgetPassword(){
    this.router.navigate(["/forgetPassword"]);
  }

  onLogin(user) {

    this.userService.login(user).subscribe(resp => {
      // tslint:disable-next-line:prefer-const
      let jwt = resp.headers.get("Authorization");
      console.log(jwt);
      console.log("resp is " + resp.body);
      this.userService.saveToken(jwt);
      this.userService.setConnected(this.userService.isUser()); //
      this.router.navigate(["/home"]);

    }, err => {
      this.mode = 1;
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }

}
