import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { SegmentsComponent } from 'src/app/modules/segments/segments.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { WorkflowComponent } from 'src/app/modules/workflow/workflow.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WorkflowModule } from 'src/app/modules/workflow/workflow.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    SegmentsComponent,
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    WorkflowModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DefaultModule { }
