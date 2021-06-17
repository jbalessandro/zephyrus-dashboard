import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Workflow {
  id: number;
  name: string;
  description: string;
}

const ELEMENT_DATA: Workflow[] = [
  {id: 1, name: 'All customers', description: 'All customers available'},
  {id: 1, name: 'New customers', description: 'Customers that bought on last six months'},
  {id: 1, name: 'Premium customers', description: 'Customers that spent more than $500'}
];
