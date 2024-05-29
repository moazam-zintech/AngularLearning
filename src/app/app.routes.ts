import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormComponent } from '../form/form.component';

export const routes: Routes = [
    {
    path: 'home-component',
    component: HomeComponent
    },
    {
        path: 'navbar-component',
        component: NavbarComponent
        },
        {
            path: 'form-component',
            component: FormComponent
            }

];
