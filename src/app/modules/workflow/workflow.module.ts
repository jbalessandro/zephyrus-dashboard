import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionConditionalComponent } from './actions/action-conditional/action-conditional.component';
import { ActionEmailComponent } from './actions/action-email/action-email.component';
import { ActionEndComponent } from './actions/action-end/action-end.component';
import { ActionStartComponent } from './actions/action-start/action-start.component';
import { ActionTimerComponent } from './actions/action-timer/action-timer.component';
import { WorkflowNewComponent } from './workflow-new/workflow-new.component';

@NgModule({
  declarations: [
    ActionConditionalComponent,
    ActionEmailComponent,
    ActionEndComponent,
    ActionStartComponent,
    ActionTimerComponent,
    WorkflowNewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorkflowNewComponent
  ]
})
export class WorkflowModule { }
