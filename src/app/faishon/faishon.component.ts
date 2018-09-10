import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router'
import { environment } from './../../environments/environment'

@Component({
    selector: 'faishon',
    templateUrl: './faishon.component.html',
    styleUrls: ['./faishon.component.scss'],
    providers: []
})
export class FaishonComponent implements OnInit {
    public isRouteLoading: boolean = false;
    constructor(
        public activatedRoute: ActivatedRoute,
        public rtr: Router) {
        this.rtr.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                this.isRouteLoading = true;
            }
            else if (event instanceof NavigationEnd) {
                this.isRouteLoading = false;
            }
        });
        window.document.title = 'Faishonart - ' + environment.appVersion;
    }

    ngOnInit() {

    }

    ngOnDestroy(): void {

    }
}
