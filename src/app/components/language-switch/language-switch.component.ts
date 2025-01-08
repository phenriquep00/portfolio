import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-language-switch',
    templateUrl: './language-switch.component.html',
    standalone: false
})
export class LanguageSwitchComponent {
    constructor(
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang('en-US');
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}