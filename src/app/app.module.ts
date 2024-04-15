import { NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Importez AppComponent ici
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { PatientListComponent } from './patient-list/patient-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent } 
  // Ajoutez d'autres routes ici au besoin
];

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
    // Ne déclarez pas AppComponent ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MatListModule,
    PatientListComponent,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule,

    // Autres modules que vous pourriez importer
  ],
  providers: []
})
export class AppModule implements DoBootstrap {
  // Utilisez la fonction ngDoBootstrap pour démarrer votre application.
  ngDoBootstrap() {}
}
