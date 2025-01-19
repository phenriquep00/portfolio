import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExperienceComponent } from "./experience.component";
import { ExperienceRouteModule } from "./experience-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
    declarations: [
        ExperienceComponent
    ],
    imports: [
        CommonModule,
        ExperienceRouteModule,
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
export class ExperienceModule { }