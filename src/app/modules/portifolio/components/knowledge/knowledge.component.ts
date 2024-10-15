import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

    public arrayKnowledge = signal<Iknowledge[]>([
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Icone de Conhecimento de Angular',
      },

      {
        src: 'assets/icons/knowledge/html.svg',
        alt: 'Icone de Conhecimento de HTML5',
      },

      {
        src: 'assets/icons/knowledge/css.svg',
        alt: 'Icone de Conhecimento de CSS3',
      },

      {
        src: 'assets/icons/knowledge/sass.svg',
        alt: 'Icone de Conhecimento de SASS',
      },

      {
        src: 'assets/icons/knowledge/js.svg',
        alt: 'Icone de Conhecimento de JavaScript',
      },

      {
        src: 'assets/icons/knowledge/nodejs.svg',
        alt: 'Icone de Conhecimento de Node.JS',
      },

      {
        src: 'assets/icons/knowledge/ts.svg',
        alt: 'Icone de Conhecimento de TypeScript',
      },

      {
        src: 'assets/icons/knowledge/python.svg',
        alt: 'Icone de Conhecimento de Python',
      },

      {
        src: 'assets/icons/knowledge/wordpress.svg',
        alt: 'Icone de Conhecimento de WordPress',
      },

      {
        src: 'assets/icons/knowledge/mysql.svg',
        alt: 'Icone de Conhecimento de MySQL',
      },

      {
        src: 'assets/icons/knowledge/figma.svg',
        alt: 'Icone de Conhecimento de Figma',
      },

      {
        src: 'assets/icons/knowledge/canva.svg',
        alt: 'Icone de Conhecimento de Canva',
      },
    ])
}
