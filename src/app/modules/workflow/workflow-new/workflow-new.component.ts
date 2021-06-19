import { Component, OnInit, ViewContainerRef, AfterContentInit, ViewChild } from '@angular/core';
import { IAction } from 'src/app/shared/models/workflow/action';
import { IWorkflow } from 'src/app/shared/models/workflow/workflow';
import { WorkflowServices } from 'src/app/shared/services/workflow.service';
export interface Segment {
  name: string;
}

@Component({
  selector: 'app-workflow-new',
  templateUrl: './workflow-new.component.html',
  styleUrls: ['./workflow-new.component.scss']
})
export class WorkflowNewComponent implements OnInit {
  @ViewChild('mainTemplate', { read: ViewContainerRef, static: true }) formRef: any;
  workFlowData!: IWorkflow;

  visible = true;
  selectable = true;
  removable = true;
  segments: Segment[] = [
    { name: 'New customers' },
    { name: 'Premium customers' },
    { name: 'Prospect customers' }
  ];
  
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
    this.createWorkFlow();
  }

  createWorkFlow(): void {
    let action = this.workflowServices.getWorkFlowAction(this.workFlowData, this.workFlowData.actions[0].id);
    this.createElement(action);
  }
  
  createElement(action: IAction) {
    this.workflowServices.createElement(action, this.formRef, this.workFlowData);
  }

  remove(segment: Segment): void {
    const index = this.segments.indexOf(segment);

    if (index >= 0) {
      this.segments.splice(index, 1);
    }
  }
}
