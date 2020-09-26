import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userService.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
    let isConnected =this.userService.getConnected();
    console.log(isConnected);

    if(isConnected === undefined) this.router.navigate(["/signup"])

  }

}
