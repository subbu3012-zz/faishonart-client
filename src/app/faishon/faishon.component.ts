import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from './../../environments/environment'

@Component({
    selector: 'faishon',
    templateUrl: './faishon.component.html',
    styleUrls: ['./faishon.component.scss'],
    providers: []
})
export class FaishonComponent implements OnInit {

    constructor(
        public activatedRoute: ActivatedRoute,
        public rtr: Router) {
        window.document.title = 'Faishonart - ' + environment.appVersion;
    }

    ngOnInit() {
        
    }

    ngOnDestroy(): void {

    }
}
