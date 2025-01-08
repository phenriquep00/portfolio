import { NgModule } from "@angular/core";
import { PageNavigatorComponent } from "./page-navigator.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [PageNavigatorComponent],
    imports: [
        CommonModule
    ],
    exports: [PageNavigatorComponent]
})
export class PageNavigatorModule { }