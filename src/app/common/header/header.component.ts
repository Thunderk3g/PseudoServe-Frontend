import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
