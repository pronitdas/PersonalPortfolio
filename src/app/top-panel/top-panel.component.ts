import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.css']
})
export class TopPanelComponent implements OnInit {

  navlinks = ['Home', 'Aboutus', 'ContactUs'];

  public open(event, navLink) {
    alert('Open ' + navLink);
  }

  constructor() { }

  ngOnInit() {
  }

}
