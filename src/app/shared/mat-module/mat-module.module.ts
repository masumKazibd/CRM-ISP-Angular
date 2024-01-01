import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  FlexLayoutModule,
  MatFormFieldModule,
  FormsModule,
  MatGridListModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule,
  ReactiveFormsModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    modules
  ]
})
export class MatModuleModule { }
