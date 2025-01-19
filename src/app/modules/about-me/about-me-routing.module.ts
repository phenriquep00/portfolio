import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutMeComponent } from "./about-me.component";

const routes: Routes = [
    {
        path: '', component: AboutMeComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutMeRouteModule { }