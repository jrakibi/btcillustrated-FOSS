import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface NoteItem {
  id: number;
  noteText: string;
  noteColor: string;
}
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  public editData: NoteItem | null = null;
  public notesForm: FormGroup;
  public noteColorList: string[] = ['Lavender', 'MistyRose', 'PaleTurquoise'];
  
  // Initialized with some random notes
  public notesList: NoteItem[] = [
    { id: 1, noteText: 'Remember to review the transaction structure for Bitcoin.', noteColor: 'Lavender' },
    { id: 2, noteText: 'Look into Schnorr signatures and how they could improve efficiency.', noteColor: 'MistyRose' },
    { id: 3, noteText: 'Complete the coding challenge on smart contracts.', noteColor: 'PaleTurquoise' },
    // Add more random notes as needed
  ];

  constructor(private fb: FormBuilder) {
    this.notesForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      noteText: ['', [Validators.required]],
      noteColor: [null, [Validators.required]]
    });
  }

  saveNote(): void {
    if (!this.notesForm.controls["id"].value) {
      this.notesForm.controls["id"].setValue(this.notesList.length + 1);
      this.notesList.push(this.notesForm.value);
    } else {
      if (this.editData) {
        const noteIndex: number = this.notesList.indexOf(this.editData);
        this.notesList[noteIndex] = this.notesForm.value;
        this.editData = null;

      }
    }
    this.notesForm.reset();
  }

  editNote(editNoteData: NoteItem): void {
    this.editData = editNoteData;
    this.notesForm.setValue({
      id: editNoteData.id,
      noteText: editNoteData.noteText,
      noteColor: editNoteData.noteColor
    });
  }

  deleteNote(deleteNoteId: number): void {
    this.notesList.filter((item, index) => {
      if (item.id === deleteNoteId) {
        this.notesList.splice(index, 1);
      }
    });
  }

  openFeedbackForm(): void {
    window.open('https://github.com/jrakibi/btcillustrated-FOSS/issues/new?assignees=&labels=feedback&projects=&template=01-suggest-changes.yml', '_blank');
  }


}
