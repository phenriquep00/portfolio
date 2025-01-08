import { RouterModule, Routes } from "@angular/router";
import { ExperienceComponent } from "./experience.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '', component: ExperienceComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperienceRouteModule { }