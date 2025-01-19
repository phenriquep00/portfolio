import { NgModule } from "@angular/core";
import { PageNavigatorComponent } from "./page-navigator.component";
import { CommonModule } from "@angular/common";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

@NgModule({
    declarations: [PageNavigatorComponent],
    imports: [
        CommonModule,
        TranslateModule.forChild({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
                        deps: [HttpClient]
                    }
                }),
    ],
    exports: [PageNavigatorComponent]
})
export class PageNavigatorModule { }