import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/landing-page/landing-page.module').then(m => m.LandingPageModule),
    },
    {
        path: 'experience',
        loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
    },
    {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule),
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
