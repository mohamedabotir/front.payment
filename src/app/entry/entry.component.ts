import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }
route(){
  this.nav.navigate(['pay']);
}
}
