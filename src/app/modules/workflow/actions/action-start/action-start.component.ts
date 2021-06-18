import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IAction } from 'src/app/shared/models/workflow/action';
import { IWorkflow } from 'src/app/shared/models/workflow/workflow';
import { WorkflowServices } from 'src/app/shared/services/workflow.service';

@Component({
  selector: 'app-action-start',
  templateUrl: './action-start.component.html',
  styleUrls: ['./action-start.component.scss']
})
export class ActionStartComponent implements OnInit {
  @Input() workFlowData!: IWorkflow;
  @Input() action!: IAction;
  @ViewChild('mainTemplate', { read: ViewContainerRef, static: true }) formRef: any;
  
  constructor(
    private workflowServices: WorkflowServices
  ) { }

  ngOnInit(): void {
    this.createWorkFlow();
  }

  createWorkFlow(): void {
    if (this.action.next != null){
      let action = this.workflowServices.getWorkFlowAction(this.workFlowData, this.action.next);
      this.workflowServices.createElement(action, this.formRef, this.workFlowData);  
    }
  }
}
