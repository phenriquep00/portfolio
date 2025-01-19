import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    standalone: false
})
export class AboutMeComponent implements OnInit{

    renderContent = false;
    renderHologram = false;
    renderProfile = false;

    ngOnInit(): void {
        setTimeout(() => {this.renderHologram = true}, 1500)
        setTimeout(() => {this.renderContent = true}, 1500)
        setTimeout(() => {this.renderProfile = true}, 2500)
    }
}