import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { DesignRoutingModule } from './design-routing.module';
import {
    MatInputModule, MatButtonModule,
    MatExpansionModule, MatIconModule, MatStepperModule, MatProgressBarModule
} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        DesignRoutingModule,
        FormsModule, ReactiveFormsModule,
        MatInputModule, MatButtonModule,
        MatExpansionModule, MatIconModule, MatStepperModule, MatProgressBarModule
    ],
    declarations: [DesignComponent]
})
export class DesignModule { }
