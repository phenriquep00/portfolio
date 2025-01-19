import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./landing-page.component";
import { CommonModule } from "@angular/common";
import { LandingRouteModule } from "./landing-page-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        LandingRouteModule,
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
export class LandingPageModule { }