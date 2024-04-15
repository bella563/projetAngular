// patient.service.ts

import { Injectable } from '@angular/core';
import { Patient } from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [
    { id: 1, prenom: 'John', nom: 'Doe', adresse: '123 Main St', numeroTelephone: '555-1234', age: 35 },
    { id: 2, prenom: 'Jane', nom: 'Smith', adresse: '456 Elm St', numeroTelephone: '555-5678', age: 28 },
    // Ajoutez d'autres patients au besoin
  ];

  constructor() {}

  getPatients(): Patient[] {
    return this.patients;
  }

  addPatient(patient: Patient): void {
    // Générer un ID unique pour le nouveau patient
    patient.id = this.patients.length + 1;
    this.patients.push(patient);
  }

  editPatient(patient: Patient): void {
    const index = this.patients.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
    }
  }

  deletePatient(patient: Patient): void {
    this.patients = this.patients.filter(p => p.id !== patient.id);
  }
}
