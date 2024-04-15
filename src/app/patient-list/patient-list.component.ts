import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient.model';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})


// patient.component.ts



export class PatientListComponent  implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patients = this.patientService.getPatients();
  }

  addPatient(): void {
    const newPatient: Patient = {
      id: 0, // L'ID sera généré automatiquement par le service
      prenom: 'New', // Valeurs par défaut pour le nouvel utilisateur
      nom: 'Patient',
      adresse: '',
      numeroTelephone: '',
      age: 0
    };
    this.patientService.addPatient(newPatient);
  }

  editPatient(patient: Patient): void {
    // Implémentez la logique pour modifier un patient (par exemple, ouvrir un formulaire de modification)
    console.log('Edit patient:', patient);
  }

  deletePatient(patient: Patient): void {
    this.patientService.deletePatient(patient);
  }
}



