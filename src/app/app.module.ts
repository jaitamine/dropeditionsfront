import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login, HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet/typings/bottom-sheet-module';
import { MatBadgeModule } from '@angular/material/badge/typings/badge-module';
import { MatButtonModule } from '@angular/material/button/typings/button-module';
import { MatButtonToggleModule } from '@angular/material/button-toggle/typings/button-toggle-module';
import { MatCheckboxModule } from '@angular/material/checkbox/typings/checkbox-module';
import { MatStepperModule } from '@angular/material/stepper/typings/stepper-module';
import { MatChipsModule } from '@angular/material/chips/typings/chips-module';
import { MatDatepickerModule } from '@angular/material/datepicker/typings/datepicker-module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider/typings/divider-module';
import { MatExpansionModule } from '@angular/material/expansion/typings/expansion-module';
import { MatGridListModule } from '@angular/material/grid-list/typings/grid-list-module';
import { MatIconModule } from '@angular/material/icon/typings/icon-module';
import { MatInputModule } from '@angular/material/input/typings/input-module';
import { MatListModule } from '@angular/material/list/typings/list-module';
import { MatMenuModule } from '@angular/material/menu/typings/menu-module';
import { MatNativeDateModule } from '@angular/material/core/typings/datetime';
import { MatPaginatorModule } from '@angular/material/paginator/typings/paginator-module';
import { MatProgressBarModule } from '@angular/material/progress-bar/typings/progress-bar-module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner/typings/progress-spinner-module';
import { MatRadioModule } from '@angular/material/radio/typings/radio-module';
import { MatRippleModule } from '@angular/material/core/typings/ripple';
import { MatSelectModule } from '@angular/material/select/typings/select-module';
import { MatSidenavModule } from '@angular/material/sidenav/typings/sidenav-module';
import { MatSliderModule } from '@angular/material/slider/typings/slider-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle/typings/slide-toggle-module';
import { MatSnackBarModule } from '@angular/material/snack-bar/typings/snack-bar-module';
import { MatSortModule } from '@angular/material/sort/typings/sort-module';
import { MatTableModule } from '@angular/material/table/typings/table-module';
import { MatTabsModule } from '@angular/material/tabs/typings/tabs-module';
import { MatToolbarModule } from '@angular/material/toolbar/typings/toolbar-module';
import { MatTooltipModule } from '@angular/material/tooltip/typings/tooltip-module';
import { MatTreeModule } from '@angular/material/tree/typings/tree-module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/services/userService.service';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Login,
    SignupComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [Login],
})
export class AppModule { }
