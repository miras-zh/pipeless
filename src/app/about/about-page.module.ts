import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { SharedModule } from "../shared/shared.module";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { AboutComponent } from "./about.component";

const routesAbout: Routes = [
    {path: 'about', component: AboutComponent, children: [
            { path: 'extra', component: AboutExtraComponent }
        ]},
]

@NgModule({
    declarations: [
        AboutComponent,
        AboutExtraComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(routesAbout),
    ],
    exports: [
        RouterModule,
    ]
})
export class AboutPageModule {

}