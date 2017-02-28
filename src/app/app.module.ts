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
import { CanActivateGuard } from './can.activate.guard';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DragulaComponent } from './dragula';
import { RequestComponent } from './request';
import { NewrequestComponent } from './newrequest';
import { FormComponent } from './form';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LayoutComponent,
        NoContentComponent,
        DragulaComponent,
        RequestComponent,
        DragulaComponent,
        NewrequestComponent,
        FormComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DragulaModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
        MaterialModule.forRoot()
    ],
    providers: [
        ENV_PROVIDERS,
        CanActivateGuard,
        GlobalService
    ]
})

export class AppModule {
}
