import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';
import { LoginComponent } from './login/login.component';
import { AddPatientDialogComponent } from './add-patient-dialog/add-patient-dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [
    MatListModule,
    MatIconModule,
    MatTableModule,
    CommonModule
  ],
})
export class AppComponent {
  title = 'PatientTrack';
  patients: Patient[] = [];
 
  constructor(private dialog: MatDialog, private router: Router, private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  private loadPatients(): void {
    this.patients = this.patientService.getPatients();
  }

  openLogin(role: string): void {
    this.dialog.open(LoginComponent, {
      data: { role }
    });
  }

  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }

  displayedColumns: string[] = ['id', 'prenom', 'nom', 'adresse', 'numeroTelephone', 'age'];

  openPatientDialog(): void {
    this.dialog.open(AddPatientDialogComponent, {
      width: '400px',
      data: {}
    });
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  editPatient(patient: Patient): void {
    this.patientService.editPatient(patient);
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPatientDialogComponent, {
      width: '750px',
      data: {} // Vous pouvez passer des données à votre boîte de dialogue ici si nécessaire
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si le résultat est vrai, ajoutez le patient
        // this.patientService.addPatient(result);
      }
    });
}
}