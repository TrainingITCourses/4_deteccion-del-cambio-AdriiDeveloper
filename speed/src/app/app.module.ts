// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Material Modules
import { MatSelectModule, MatFormFieldModule } from '@angular/material';

// App Component
import { AppComponent } from './app.component';

// Change Detection Component
import { ChangeDetectionComponent, CriterionTypeComponent, CriterionValuesComponent, ResultsComponent, SearchComponent } from './store/components';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    CriterionTypeComponent, 
    CriterionValuesComponent,
    ResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
