import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  members = [
    { name: "John Elkann", description: "President and CEO", picture: { url: './../../assets/images/Team_member_1.jpg' } },
    { name: "Mike Manley", description: "Executive Chairman", picture: { url: './../../assets/images/Team_member_2.jpg' } },
    { name: "Alan Mulally", description: "Director – Manufacturing", picture: { url: './../../assets/images/Team_member_3.jpg' } }
  ]
  ngOnInit(): void {
  }
  
}
