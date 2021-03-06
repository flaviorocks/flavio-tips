import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navbarOpen = false;
  public faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
