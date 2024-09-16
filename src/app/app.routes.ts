import { Routes } from '@angular/router';
import { NotFoundComponent } from './ui/pages/errors/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "**",
        component: NotFoundComponent,
    }
];
