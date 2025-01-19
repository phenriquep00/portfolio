import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutMeComponent } from "./about-me.component";
import { AboutMeRouteModule } from "./about-me-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../../app.module";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        CommonModule,
        AboutMeRouteModule,
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
export class AboutMeModule { }