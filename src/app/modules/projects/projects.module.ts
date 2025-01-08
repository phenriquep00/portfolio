import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRouteModule } from "./projects-routing.module";


@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        ProjectsRouteModule,
        CommonModule
    ],
    providers: []
})
export class ProjectsModule { }