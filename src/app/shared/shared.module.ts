import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        // ColorDirective,
        // PageNamePipe
    ],
    imports:[CommonModule],
    exports:[
        CommonModule,
        // ColorDirective,
        // PageNamePipe
    ]
})
export class SharedModule {

}