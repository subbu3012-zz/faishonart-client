import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: []
})
export class HomeComponent implements OnInit {

    constructor(
        public activatedRoute: ActivatedRoute,
        public rtr: Router) {
    }

    ngOnInit() {
        
    }

    ngOnDestroy(): void {

    }
}
