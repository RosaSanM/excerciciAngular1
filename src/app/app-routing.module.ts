import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ContactComponent } from  './contact/contact.component';
import { PorfolioComponent } from './porfolio/porfolio.component';

const routes: Routes = [
  {
    path:  '',
    component:  HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Aprender fotografía',
      descrption: 'aprender fotografía paso a paso, desde controlar tu cámara a controlar la luz.',
      ogTitle: 'aprender fotografía paso a paso, desde controlar tu cámara a controlar la luz.',
    }
    },
    {
    path:  'about',
    component:  AboutComponent,
    data: {
      title: 'Sobre nosotros',
      descrption: 'aprender fotografía paso a paso, desde controlar tu cámara a controlar la luz.',
      ogTitle: 'aprender fotografía paso a paso, desde controlar tu cámara a controlar la luz.',
    }
    },
    {
    path:  'contact',
    component:  ContactComponent,
    data: {
      title: 'Contacta con nosotros',
      descrption: 'Tienes alguna pregunta? Escríbenos!.',
      ogTitle: 'Tienes alguna pregunta? Escríbenos!.',
    }
    },
    {
      path: 'porfolio',
      component: PorfolioComponent,
      data: {
        title: 'Usar flash externo',
        descrption: 'Te enseñamos como usar el flash externo en cualquier situación y lugar.',
        ogTitle: 'Te enseñamos como usar el flash externo en cualquier situación y lugar.',
      }
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
