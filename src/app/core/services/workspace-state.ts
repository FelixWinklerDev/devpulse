import { Injectable, signal, computed } from '@angular/core';
import { NoteDocument, TaskCard } from '../models/workspace.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceState {
  private tasksSignal = signal<TaskCard[]>([
    {
      id: '1',
      title: 'SCSS Architektur einrichten',
      description: 'Variables, Mixins und BEM-Struktur aufbauen',
      status: 'in-progress',
      priority: 'high',
      tags: ['SCSS', 'Setup'],
      createdAt: new Date(),
    },
  ]);

  private notesSignal = signal<NoteDocument[]>([]);

  // Read-only Signals for components
  readonly tasks = this.tasksSignal.asReadonly();
  readonly notes = this.notesSignal.asReadonly();

  // Computed Values (Beispiel)
  readonly todoTasks = computed(() => this.tasksSignal().filter((t) => t.status === 'todo'));

  // Actions
  addTask(task: Omit<TaskCard, 'id' | 'createdAt'>) {
    const newTask: TaskCard = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    this.tasksSignal.update((tasks) => [...tasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskCard['status']) {
    this.tasksSignal.update((tasks) =>
      tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
    );
  }
}
