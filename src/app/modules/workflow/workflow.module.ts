import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionConditionalComponent } from './actions/action-conditional/action-conditional.component';
import { ActionEmailComponent } from './actions/action-email/action-email.component';
import { ActionEndComponent } from './actions/action-end/action-end.component';
import { ActionStartComponent } from './actions/action-start/action-start.component';
import { ActionTimerComponent } from './actions/action-timer/action-timer.component';
import { WorkflowNewComponent } from './workflow-new/workflow-new.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    ActionConditionalComponent,
    ActionEmailComponent,
    ActionEndComponent,
    ActionStartComponent,
    ActionTimerComponent,
    WorkflowNewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    WorkflowNewComponent
  ]
})
export class WorkflowModule { }
