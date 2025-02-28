import { Component } from '@angular/core';
import { Note } from '../models/student';
import { StudentService } from '../services/student.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  notes: Note[] = [];

  constructor(private studentService: StudentService, private router: Router) {
    this.notes = this.studentService.getNotes();
  }


  newNotes(): void {
    this.router.navigate(['/new-student']);
  }

  showNote(): void {
    this.router.navigate(['/show-note']);
  }



}
