import { Injectable, signal, computed } from '@angular/core';
import { NoteDocument, ApplicationCard } from '../models/workspace.model';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceState {
  private applicationsSignal = signal<ApplicationCard[]>([
    {
      id: '1',
      company: 'Wiemann Lehrmittel GmbH',
      city: 'Muldestausee',
      role: 'Frontend Developer',
      status: 'cancellation',
      priority: 'low',
      appliedAt: new Date(),
    },
  ]);

  private notesSignal = signal<NoteDocument[]>([]);

  // Read-only Signals for components
  readonly applications = this.applicationsSignal.asReadonly();
  readonly notes = this.notesSignal.asReadonly();

  // Computed Values (Beispiel)
  readonly application = computed(() => this.applicationsSignal().filter((t) => t.status === 'open'));

  // Actions
  addApplication(applications: Omit<ApplicationCard, 'id' | 'appliedAt'>) {
    const newApplication: ApplicationCard = {
      ...applications,
      id: crypto.randomUUID(),
      appliedAt: new Date(),
    };
    this.applicationsSignal.update((applications) => [...applications, newApplication]);
  }

  updateApplicationStatus(applicationId: string, newStatus: ApplicationCard['status']) {
    this.applicationsSignal.update((application) =>
      application.map((a) => (a.id === applicationId ? { ...a, status: newStatus } : a)),
    );
  }
}
