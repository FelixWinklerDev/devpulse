import { Routes } from '@angular/router';
import { Shell } from './core/components/shell/shell';
import { Applications } from './features/applications/applications';

export const routes: Routes = [
    { path: "", component: Shell},
    { path: "applications", component: Applications }
];
