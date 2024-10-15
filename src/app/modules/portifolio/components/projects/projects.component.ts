import { Component, signal, inject } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import { MatDialogModule, MatDialog} from '@angular/material/dialog'
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/lista-de-tarefas.png', 
      alt: 'Projeto Lista de Tarefas',
      title: 'Lista de Tarefas',
      with: '100px',
      height: '51px',
      description: 'Pequeno projeto de uma lista de tarefas feito com TypeScript, SCSS e angular, somente para aprendizado.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: '',
        },
      ],
    },

    {
      src: 'assets/img/projects/lista-de-tarefas.png', //trocar a imagem
      alt: 'Projeto para Validar CPF',
      title: 'Validador de CPF com Python',
      with: '100px',
      height: '51px',
      description: 'Pequeno programa para fazer validação de CPF com Python, somente para fins de aprendizagem. O projeto não contém CSS.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/henrick007/Validador-de-CPF',
        },
      ],
    },

    {
      src: 'assets/img/projects/lista-de-tarefas.png', //Trocar imagem
      alt: 'Projeto para Geração de CPF',
      title: 'Gerador de CPF',
      with: '100px',
      height: '51px',
      description: 'Pequeno projeto para geração de CPF feito com Python, somente para fins de aprendizagem. O projeto não contém CSS.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/henrick007/Gerador-de-CPF',
        },
      ],
    },

    {
      src: 'assets/img/projects/lista-de-tarefas.png',//Trocar imagem
      alt: 'Projeto da pagina do spotify',
      title: 'Landing page Spotify',
      with: '100px',
      height: '51px',
      description: 'Cópia da landing page do Spotify que fiz na época da faculdade, quando estava me aperfeiçoando com o desenvolvimento fron-end, projeto feito com TypeScript, HTML e CSS.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/henrick007/thspotify',
        },
      ],
    },

    {
      src: 'assets/img/projects/lista-de-tarefas.png',//Trocar Imagem
      alt: 'Projeto fazendo uma landing page de um perfil',
      title: 'Landing page Perfil',
      with: '100px',
      height: '51px',
      description: 'Projeto do curso de Discover que fiz pela Rocketseat, onde criamos um pequeno perfil interativo, com HTML, CSS e JavaScript.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/henrick007/Discoveer',
        },
      ],
    },

    {
      src: 'assets/img/projects/lista-de-tarefas.png',//Trocar imagem
      alt: 'Projeto fazendo uma lista de participantes',
      title: 'Lista de Participantes',
      with: '100px',
      height: '51px',
      description: 'Projeto feito no evento da Rocketseat, chamado NLW-Unite, onde criamos essa lista de participantes, onde poderá ser feito cadastro, filtros, pesquisas  etc. Projeto todo feito em React JS e foi um grande aprendizado.',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/henrick007/NLW-React',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
