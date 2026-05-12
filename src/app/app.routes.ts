import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ReciclajeComponent } from './pages/reciclaje/reciclaje.component';
import { ConsejosComponent } from './pages/consejos/consejos.component';

export const routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'reportes', component: ReportesComponent},
    {path:'reciclaje', component: ReciclajeComponent},
    {path:'consejos', component: ConsejosComponent},
    {path:'**', redirectTo:'home'}
];
