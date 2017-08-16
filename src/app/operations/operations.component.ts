import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  activeTab="drawings";

  constructor() { }

  ngOnInit() {
  }

  onTabClick(tabname: string){
    this.activeTab= tabname;
  }


}
