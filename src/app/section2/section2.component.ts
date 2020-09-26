import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/userService.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {

    let isConnected =this.userService.getConnected();
    console.log(isConnected);

    if(isConnected === undefined) this.router.navigate(["/signup"])
  }

}
