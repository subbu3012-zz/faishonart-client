import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaishonRoutingModule } from './faishon-routing.module';
import { FaishonComponent } from './faishon.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material'

@NgModule({
    imports: [
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FaishonRoutingModule,
        HttpClientModule,
        MatInputModule, MatButtonModule, MatCardModule, MatTabsModule
    ],
    declarations: [
        FaishonComponent,
    ],
    providers: []
})
export class FaishonModule { }
