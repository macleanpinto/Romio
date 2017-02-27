import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { InMemoryComponent } from './demo/inMemory.component';
import { PaginationComponent } from './datagrid/pagination.component';
import { TableComponent } from './demo/table.component';
import { MaterialModule } from '@angular/material';
import { SeatComponent } from './seat';
import { BlockComponent } from './block';
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        InMemoryComponent,
        TableComponent,
        PaginationComponent,
        BlockComponent,
        SeatComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(ROUTES)
    ],
    providers: []
})

export class JulietModule {
}
