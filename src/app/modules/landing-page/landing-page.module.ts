import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page.component";
import { CommonModule } from "@angular/common";
import { LandingRouteModule } from "./landing-page-routing.module";


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        LandingRouteModule,
        CommonModule
    ],
    providers: []
})
export class LandingPageModule { }