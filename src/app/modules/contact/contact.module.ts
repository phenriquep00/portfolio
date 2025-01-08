import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContactComponent } from "./contact.component";
import { ContactRouteModule } from "./contact-routing.module";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRouteModule
    ],
    providers: []
})
export class ContactModule { }