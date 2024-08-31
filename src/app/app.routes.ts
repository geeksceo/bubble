import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "**",
        component: NotFoundComponent,
    }
];
