import { Component, OnInit, ViewContainerRef, AfterContentInit, ViewChild } from '@angular/core';
import { IAction } from 'src/app/shared/models/workflow/action';
import { IWorkflow } from 'src/app/shared/models/workflow/workflow';
import { WorkflowServices } from 'src/app/shared/services/workflow.service';

@Component({
  selector: 'app-workflow-new',
  templateUrl: './workflow-new.component.html',
  styleUrls: ['./workflow-new.component.scss']
})
export class WorkflowNewComponent implements OnInit {
  @ViewChild('mainTemplate', { read: ViewContainerRef, static: true }) formRef: any;
  workFlowData!: IWorkflow;
  
  constructor(    
    public viewContainerRef: ViewContainerRef,
    private workflowServices: WorkflowServices
  ) {}

  ngOnInit(): void {
    this.getWorkFlow();
  }

  ngAfterViewInit(): void {

  }

  getWorkFlow(): void {
    this.workFlowData = this.workflowServices.getWorkFlow();    
    debugger;
    this.createWorkFlow();
  }

  createWorkFlow(): void {
    let action = this.workflowServices.getWorkFlowAction(this.workFlowData, this.workFlowData.actions[0].id);
    this.createElement(action);
  }
  
  createElement(action: IAction) {
    this.workflowServices.createElement(action, this.formRef, this.workFlowData);
  }

}
