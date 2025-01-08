import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { pages } from "../../models/pages.model";

@Component({
    selector: 'app-page-navigator',
    templateUrl: './page-navigator.component.html',
    standalone: false
})
export class PageNavigatorComponent {
    pages = pages;

    constructor(
        private router: Router,
    ) {

    }

    navigateTo(path: string): void {
        this.router.navigate([path]);
      }
}