import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MidiasComponent } from './midias.component';
import { SharedModule } from '../core/components/shared/shared-module.module';
import { LivrosComponent } from './livros/livros.component';
import { InformacoesLivroComponent } from './livros/livro/informacoes-livro/informacoes-livro.component';
import { LivroComponent } from './livros/livro/livro.component';

const ROUTES: Routes = [
  { path: '', component: MidiasComponent, pathMatch: 'full' },
  {
    path: 'filmes',
    loadChildren: () => import('./filmes/filmes.module').then(m => m.FilmesModule) 
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then(m => m.SeriesModule)
  },
  
];

@NgModule({
  declarations: [
    MidiasComponent,
    LivrosComponent,
    InformacoesLivroComponent,
    LivroComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class MidiaModule { }
