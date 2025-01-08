import { Route, RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
    {
        path: 'landing-page', component: LandingPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRouteModule {

}