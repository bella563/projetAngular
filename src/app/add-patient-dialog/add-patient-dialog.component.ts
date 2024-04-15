import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Patient } from '../patient.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-add-patient-dialog',
  templateUrl: './add-patient-dialog.component.html',
  styleUrls: ['./add-patient-dialog.component.css'],
  standalone: true,

  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,

  ],
})
export class AddPatientDialogComponent {
  patientService: any;
  patient: Patient = { prenom: '',nom: '',adresse: '',numeroTelephone: '',age: 0,id: 0};
  constructor(
    public dialogRef: MatDialogRef<AddPatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Patient
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Traitement du formulaire ici
    this.dialogRef.close(this.data);
  }
  addPatient(patient: Patient): void {
    
this.patientService.addPatient(patient);

    // Fermer la boîte de dialogue après l'ajout du patient
    this.dialogRef.close();
  }
  
}
