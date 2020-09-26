import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userService.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any;
  mode: any;
  errorMessage: any;
  
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(user) {

    console.log(user)
    this.userService.register(user)
      .subscribe(data => {
        console.log(data);
        this.user = data; 
        this.mode = 1;
        this.router.navigate(["/home"]);
      },
        err => {
          this.errorMessage = err.error.message; this.mode = 0;
        });
  }


}
