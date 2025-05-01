import { Service, MethodologyStep, Result, NavItem, BlogPost, SuccessCase, Metric } from '../types';
import { 
  Users, Briefcase, UserSearch, BookOpen, 
  BarChart, ClipboardList, Fingerprint, LineChart, 
  Heart, Award, Search, PenTool, Repeat, CheckCircle,
  Building, Timer, ThumbsUp
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'about', label: 'Quem Somos', href: '#about' },
  { id: 'services', label: 'Serviços', href: '#services' },
  { id: 'methodology', label: 'Metodologia', href: '#methodology' },
  { id: 'results', label: 'Resultados', href: '#results' },
  { id: 'blog', label: 'Blog', href: '#blog' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Consultoria em Gestão de Pessoas',
    description: 'Assessoria completa para estruturar e otimizar a área de Recursos Humanos da sua empresa.',
    icon: 'Users'
  },
  {
    id: 2,
    title: 'Estruturação de Cargos e Processos',
    description: 'Desenvolvimento de descrições de cargos, organogramas e definição de processos estruturados.',
    icon: 'Briefcase'
  },
  {
    id: 3,
    title: 'Recrutamento e Seleção',
    description: 'Processos de atração e seleção dos melhores profissionais alinhados às necessidades do seu negócio.',
    icon: 'UserSearch'
  },
  {
    id: 4,
    title: 'Treinamento e Desenvolvimento',
    description: 'Programas customizados para capacitar e desenvolver competências nas equipes.',
    icon: 'BookOpen'
  },
  {
    id: 5,
    title: 'Gestão de Clima Organizacional',
    description: 'Avaliação e implementação de ações para melhorar o ambiente de trabalho e a satisfação dos colaboradores.',
    icon: 'BarChart'
  },
  {
    id: 6,
    title: 'Diagnóstico Organizacional',
    description: 'Análise completa dos processos e estrutura da empresa para identificar oportunidades de melhoria.',
    icon: 'ClipboardList'
  },
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    id: 1,
    title: 'Diagnóstico Inicial',
    description: 'Analisamos a estrutura atual da empresa, processos e necessidades específicas para entender seus desafios.',
    icon: 'Search'
  },
  {
    id: 2,
    title: 'Desenvolvimento de Estratégias',
    description: 'Criamos soluções personalizadas e um plano de ação alinhado aos objetivos do seu negócio.',
    icon: 'PenTool'
  },
  {
    id: 3,
    title: 'Implementação e Acompanhamento',
    description: 'Executamos as ações planejadas com acompanhamento constante para garantir resultados efetivos.',
    icon: 'Repeat'
  },
  {
    id: 4,
    title: 'Avaliação e Ajustes',
    description: 'Medimos os resultados alcançados e realizamos ajustes para otimização contínua dos processos.',
    icon: 'CheckCircle'
  },
];

export const RESULTS: Result[] = [
  {
    id: 1,
    title: 'Redução do turnover',
    description: 'Diminuição significativa da rotatividade de funcionários, gerando maior estabilidade e economia.',
    icon: 'LineChart'
  },
  {
    id: 2,
    title: 'Aumento no engajamento',
    description: 'Colaboradores mais motivados e comprometidos com os objetivos da empresa.',
    icon: 'Heart'
  },
  {
    id: 3,
    title: 'Eficiência nos processos de seleção',
    description: 'Contratações mais assertivas e alinhadas às necessidades e cultura da empresa.',
    icon: 'UserSearch'
  },
  {
    id: 4,
    title: 'Fortalecimento da liderança',
    description: 'Desenvolvimento de gestores mais preparados para liderar equipes e alcançar resultados.',
    icon: 'Award'
  },
  {
    id: 5,
    title: 'Cultura organizacional fortalecida',
    description: 'Ambiente de trabalho mais saudável e alinhado aos valores da empresa.',
    icon: 'Fingerprint'
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Como estruturar um RH do zero?',
    excerpt: 'Aprenda os passos essenciais para implementar uma área de Recursos Humanos eficiente na sua empresa.',
    slug: 'como-estruturar-rh-zero',
    date: '2024-03-15',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Por que o RH estratégico é essencial?',
    excerpt: 'Descubra como um RH estratégico pode impactar diretamente nos resultados do seu negócio.',
    slug: 'rh-estrategico-essencial',
    date: '2024-03-10',
    readTime: '4 min'
  },
  {
    id: 3,
    title: 'Técnicas para reduzir o turnover',
    excerpt: 'Conheça estratégias práticas para diminuir a rotatividade e reter talentos na sua empresa.',
    slug: 'tecnicas-reduzir-turnover',
    date: '2024-03-05',
    readTime: '6 min'
  },
  {
    id: 4,
    title: 'Como identificar talentos para sua empresa',
    excerpt: 'Dicas e técnicas para encontrar e selecionar os melhores profissionais para sua organização.',
    slug: 'identificar-talentos-empresa',
    date: '2024-03-01',
    readTime: '5 min'
  }
];

export const SUCCESS_CASES: SuccessCase[] = [
  {
    id: 1,
    company: 'Empresa do Setor de Tecnologia',
    challenge: 'Alto índice de turnover e dificuldade na retenção de talentos',
    solution: 'Reestruturação dos processos seletivos e implementação de programa de integração',
    result: 'Redução de 40% no turnover em 6 meses'
  },
  {
    id: 2,
    company: 'Indústria de Médio Porte',
    challenge: 'Falta de estrutura na área de RH e processos desorganizados',
    solution: 'Implementação de políticas de RH e definição clara de processos',
    result: 'Aumento de 60% na eficiência dos processos de RH'
  },
  {
    id: 3,
    company: 'Startup em Crescimento',
    challenge: 'Necessidade de escalar a equipe rapidamente mantendo a cultura',
    solution: 'Desenvolvimento de programa de atração e seleção alinhado à cultura',
    result: 'Contratação de 50 novos colaboradores com fit cultural em 3 meses'
  }
];

export const METRICS: Metric[] = [
  {
    id: 1,
    value: '+10',
    label: 'Anos de experiência',
    icon: 'Timer'
  },
  {
    id: 2,
    value: '+30',
    label: 'Empresas atendidas',
    icon: 'Building'
  },
  {
    id: 3,
    value: '95%',
    label: 'Satisfação dos clientes',
    icon: 'ThumbsUp'
  }
];

export const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Impulse%20RH!";