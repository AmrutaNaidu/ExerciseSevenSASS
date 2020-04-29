import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  houses = 'Houses';
  professors = 'Professors';
  courses = 'Courses';
  champions = 'Champions';
  horcrux = 'Horcrux';
  diagonalley = 'Diagon Alley';
  hogsmeade = 'Hogsmeade';
}
