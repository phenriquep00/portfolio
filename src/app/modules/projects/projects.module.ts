import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRouteModule } from "./projects-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        ProjectsRouteModule,
        CommonModule,
        TranslateModule.forChild({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
                                deps: [HttpClient]
                            }
                        }),
    ],
    providers: []
})
export class ProjectsModule { }