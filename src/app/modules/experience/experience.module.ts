import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExperienceComponent } from "./experience.component";
import { ExperienceRouteModule } from "./experience-routing.module";

@NgModule({
    declarations: [
        ExperienceComponent
    ],
    imports: [
        CommonModule,
        ExperienceRouteModule
    ],
    providers: []
})
export class ExperienceModule { }