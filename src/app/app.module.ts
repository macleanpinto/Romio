import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service';
import { LayoutComponent } from './layout';
import { NoContentComponent } from './no-content';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DragulaComponent } from './dragula';
import { BlockComponent } from './block';
import { SeatComponent } from './seat';
import { BlockService } from './block/block.service';
import { RequestComponent } from './request';


@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LayoutComponent,
        NoContentComponent,
        DragulaComponent,
        BlockComponent,
        SeatComponent,
        RequestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
        MaterialModule.forRoot(),
        DragulaModule
    ],
    providers: [
        ENV_PROVIDERS,
        GlobalService
    ]
})

export class AppModule {
}
