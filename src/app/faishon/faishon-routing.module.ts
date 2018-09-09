import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaishonComponent } from './faishon.component';

const routes: Routes = [
    {
        path: '',
        component: FaishonComponent,
        children:[
            {
                path: '',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadChildren: './pages/home/home.module#HomeModule',
            },
            {
                path: 'design',
                loadChildren: './pages/design/design.module#DesignModule',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FaishonRoutingModule { }
