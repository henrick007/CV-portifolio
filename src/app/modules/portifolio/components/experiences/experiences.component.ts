import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

    public arrayExperiences = signal<IExperiences[]>([
      {
        summary: {
          strong: 'Analista de Suporte - Helpdesk',
          p: 'Gestmais Tecnologia | Mar 2023 - Ago 2024',
        },
        text: 'Como Analista de Suporte - Help/Moviedesk, ofereço suporte presencial e remoto em sistemas relacionados a informática sejam eles: Pacote Office, Windows, TOTVS Whintor, ION Vendas, Fusion, Source WMS, Pulsus, VPN entre outras plataformas. Além de resolver problemas de manutenção a computadores e equipamentos de informática em geral. Focado em solucionar questões técnicas, otimizo o desempenho de sistemas e garanto a eficiência operacional. Comprometido em proporcionar uma experiência excepcional ao usuário, meu trabalho visa manter a integridade e a funcionalidade dos sistemas, garantindo o fluxo contínuo das operações.'
      },

      {
        summary: {
          strong: 'Auxiliar de Contabilidade/ Assistente Financeiro',
          p: 'Máxima Ambiental | Jul 2021 - Jan 2023',
        },
        text: 'Como Assistente Financeiro, fui responsável por apoiar as operações financeiras da empresa, garantindo a precisão e integridade dos registros financeiros. Minhas principais responsabilidades incluíam a realização de tarefas administrativas relacionadas à contabilidade, processamento de contas a pagar e receber, elaboração de relatórios financeiros, além de auxiliar na análise de dados para suporte às tomadas de decisão estratégicas. Além disso, trabalhei em estreita colaboração com equipes internas para garantir o cumprimento das políticas e procedimentos financeiros estabelecidos, contribuindo assim para o sucesso financeiro da organização.'
      },

      {
        summary: {
          strong: 'Estágiario',
          p: 'Convicta Cursos | Jan 2020 - Jun 2020',
        },
        text: '<p>Como estagiário na Convicta Cursos, atuei como monitor de alunos, oferecendo suporte individualizado, esclarecendo dúvidas e facilitando atividades práticas em colaboração com os instrutores. Minha dedicação em acompanhar o progresso dos alunos contribuiu para o sucesso do programa educacional, desenvolvendo minhas habilidades em comunicação, trabalho em equipe e organização.</p>'
      },
    ]);
}
