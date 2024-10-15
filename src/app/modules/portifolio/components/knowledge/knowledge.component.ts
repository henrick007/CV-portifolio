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
        src: '/public/assets/icons/knowledge/angular.svg',
        alt: 'Icone de Conhecimento de Angular',
      },

      {
        src: '/public/assets/icons/knowledge/html.svg',
        alt: 'Icone de Conhecimento de HTML5',
      },

      {
        src: '/public/assets/icons/knowledge/css.svg',
        alt: 'Icone de Conhecimento de CSS3',
      },

      {
        src: '/public/assets/icons/knowledge/sass.svg',
        alt: 'Icone de Conhecimento de SASS',
      },

      {
        src: '/public/assets/icons/knowledge/js.svg',
        alt: 'Icone de Conhecimento de JavaScript',
      },

      {
        src: '/public/assets/icons/knowledge/nodejs.svg',
        alt: 'Icone de Conhecimento de Node.JS',
      },

      {
        src: '/public/assets/icons/knowledge/ts.svg',
        alt: 'Icone de Conhecimento de TypeScript',
      },

      {
        src: '/public/assets/icons/knowledge/python.svg',
        alt: 'Icone de Conhecimento de Python',
      },

      {
        src: '/public/assets/icons/knowledge/wordpress.svg',
        alt: 'Icone de Conhecimento de WordPress',
      },

      {
        src: '/public/assets/icons/knowledge/mysql.svg',
        alt: 'Icone de Conhecimento de MySQL',
      },

      {
        src: '/public/assets/icons/knowledge/figma.svg',
        alt: 'Icone de Conhecimento de Figma',
      },

      {
        src: '/public/assets/icons/knowledge/canva.svg',
        alt: 'Icone de Conhecimento de Canva',
      },
    ])
}
