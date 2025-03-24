import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuggestionComponent } from './components/suggestion.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './components/userdetails.component';
import { ConfirmationComponent } from './components/confirmation.component';
import { AboutComponent } from './components/about.component';
import { ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: '' , component: AboutComponent},
  {path: 'suggestions' , component: SuggestionComponent},
  {path: 'userdetails' , component: UserdetailsComponent},
  {path: 'confirm' , component: ConfirmationComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    SuggestionComponent,
    UserdetailsComponent,
    ConfirmationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
