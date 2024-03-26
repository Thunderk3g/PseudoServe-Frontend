import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  rightPanelActive: boolean = false;

  toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  }
  ngOnInit(): void {
    console.log("Here");
  }

}
