import { NgModule } from "@angular/core";
import { LanguageSwitchComponent } from "./language-switch.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [LanguageSwitchComponent],
    imports: [
        CommonModule
    ],
    exports: [LanguageSwitchComponent]
})
export class LanguageSwitchModule { }