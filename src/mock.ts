export const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const dailyRevenue = [
  { day: "01", revenue: 850, appointments: 12 },
  { day: "02", revenue: 920, appointments: 14 },
  { day: "03", revenue: 1100, appointments: 16 },
  { day: "04", revenue: 780, appointments: 11 },
  { day: "05", revenue: 1250, appointments: 18 },
  { day: "06", revenue: 1450, appointments: 21 },
  { day: "07", revenue: 950, appointments: 13 },
  { day: "08", revenue: 890, appointments: 12 },
  { day: "09", revenue: 1020, appointments: 15 },
  { day: "10", revenue: 1180, appointments: 17 },
  { day: "11", revenue: 950, appointments: 14 },
  { day: "12", revenue: 1300, appointments: 19 },
  { day: "13", revenue: 1520, appointments: 22 },
  { day: "14", revenue: 980, appointments: 14 },
  { day: "15", revenue: 1100, appointments: 16 },
];

export const topServices = [
  { name: "Corte + Barba", sales: 156, revenue: 18720, percentage: 35 },
  { name: "Corte Simples", sales: 98, revenue: 4900, percentage: 22 },
  { name: "Barba", sales: 67, revenue: 3350, percentage: 15 },
  { name: "Sobrancelha", sales: 45, revenue: 900, percentage: 10 },
  { name: "Químicas", sales: 28, revenue: 2800, percentage: 8 },
];

export const paymentMethods = [
  { method: "PIX", amount: 12450.0, percentage: 44, color: "bg-blue-500" },
  {
    method: "Cartão Débito",
    amount: 8920.0,
    percentage: 31,
    color: "bg-green-500",
  },
  {
    method: "Cartão Crédito",
    amount: 5680.0,
    percentage: 20,
    color: "bg-purple-500",
  },
  { method: "Dinheiro", amount: 1400.0, percentage: 5, color: "bg-orange-500" },
];

export const heroData = {
  badge: "Revolucione seu negócio",
  title: "Transforme agendamentos em",
  titleHighlight: "experiências incríveis",
  subtitle:
    "Sistema completo de agendamento online com IA, pagamentos integrados e automação inteligente. Aumente suas conversões em até 300%.",
  ctaPrimary: "Começar Gratuitamente",
  ctaSecondary: "Agendar Demo",
  stats: [
    { value: "50K+", label: "Empresas" },
    { value: "2M+", label: "Agendamentos/mês" },
    { value: "98%", label: "Satisfação" },
    { value: "24/7", label: "Suporte" },
  ],
};

export const featuresData = [
  {
    icon: "Sparkles",
    title: "IA Preditiva",
    description:
      "Algoritmos inteligentes preveem cancelamentos e otimizam sua agenda automaticamente.",
    color: "from-primary to-primary",
    stats: "+85% eficiência",
  },
  {
    icon: "Zap",
    title: "Automação Total",
    description:
      "Lembretes, confirmações e follow-ups automáticos via WhatsApp, SMS e email.",
    color: "from-primary to-primary",
    stats: "10h economizadas/semana",
  },
  {
    icon: "CreditCard",
    title: "Pagamentos Integrados",
    description:
      "Aceite cartão, Pix e boleto. Receba na hora com taxas competitivas.",
    color: "from-primary to-primary",
    stats: "Taxas 30% menores",
  },
  {
    icon: "BarChart3",
    title: "Analytics Avançado",
    description:
      "Dashboards em tempo real com insights acionáveis e relatórios personalizados.",
    color: "from-primary to-primary",
    stats: "ROI rastreado 100%",
  },
  {
    icon: "Users",
    title: "Multi-profissional",
    description:
      "Gerencie equipes ilimitadas com agenda sincronizada e comissões automáticas.",
    color: "from-primary to-primary",
    stats: "Equipes ilimitadas",
  },
  {
    icon: "Shield",
    title: "Segurança Premium",
    description:
      "Criptografia de ponta, LGPD compliance e backup automático em tempo real.",
    color: "from-primary to-primary",
    stats: "99.9% uptime",
  },
];

export const benefitsData = [
  {
    title: "Agenda Inteligente",
    description:
      "IA identifica melhores horários, sugere encaixes e previne conflitos automaticamente.",
    image: "calendar",
    metrics: [
      "40% mais agendamentos",
      "Zero conflitos",
      "Otimização automática",
    ],
  },
  {
    title: "Cliente no Controle",
    description:
      "Portal personalizado onde clientes agendam, reagendam e pagam sem você mexer um dedo.",
    image: "mobile",
    metrics: [
      "Experiência 5 estrelas",
      "Self-service 100%",
      "App nativo incluso",
    ],
  },
  {
    title: "Gestão Financeira",
    description:
      "Dashboard completo com faturamento, comissões, impostos e conciliação bancária.",
    image: "dashboard",
    metrics: [
      "Conciliação automática",
      "Relatórios fiscais",
      "Previsão de receita",
    ],
  },
];

export const pricingData = [
  {
    name: "Starter",
    price: "97",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Até 3 profissionais",
      "500 agendamentos/mês",
      "WhatsApp + SMS básico",
      "Pagamentos online",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "247",
    period: "/mês",
    description: "Mais popular",
    features: [
      "Profissionais ilimitados",
      "Agendamentos ilimitados",
      "WhatsApp + SMS + Email",
      "IA preditiva inclusa",
      "Analytics avançado",
      "Suporte prioritário",
      "App personalizado",
    ],
    highlighted: true, // Pode colorir com primary no layout
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Para grandes operações",
    features: [
      "Tudo do Professional",
      "Múltiplas unidades",
      "API dedicada",
      "Gerente de conta",
      "SLA garantido",
      "Integração sob medida",
    ],
    highlighted: false,
  },
];

export const testimonialsData = [
  {
    name: "Mariana Silva",
    role: "Proprietária - Studio Beleza",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Triplicamos nosso faturamento em 6 meses. A automação liberou minha equipe para focar no atendimento. Melhor investimento que já fiz!",
    metric: "+300% receita",
  },
  {
    name: "Carlos Mendes",
    role: "CEO - Clínica Saúde+",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Reduzimos faltas em 85% com os lembretes inteligentes. O sistema pagou por si mesmo no primeiro mês.",
    metric: "-85% no-shows",
  },
  {
    name: "Ana Costa",
    role: "Gerente - SPA Zen",
    avatar: "https://i.pravatar.cc/150?img=38",
    rating: 5,
    text: "A experiência do cliente melhorou absurdamente. Eles adoram poder agendar pelo celular a qualquer hora. NPS subiu de 60 para 92!",
    metric: "NPS 92",
  },
];

export const faqData = [
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "Você estará operacional em menos de 24 horas! Nossa equipe cuida de toda configuração inicial, importação de dados e treinamento da equipe.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim! Sem fidelidade, sem multas. Cancele quando quiser e exportamos todos seus dados em formatos padrão.",
  },
  {
    question: "Como funcionam as taxas de pagamento?",
    answer:
      "Taxas competitivas: Pix 1,2%, Cartão 2,9% + R$0,30. Recebimento em D+1 para Pix e D+30 para cartão. Sem mensalidade adicional.",
  },
  {
    question: "O sistema funciona offline?",
    answer:
      "Sim! Modo offline para consulta e agendamento. Sincronização automática quando voltar online.",
  },
];

export const footerData = {
  company: {
    name: "Infynitron Agenda",
    tagline: "O futuro dos agendamentos",
    description:
      "Transformando a forma como empresas gerenciam tempo e clientes desde 2020.",
  },
  links: {
    product: [
      { label: "Recursos", href: "#recursos" },
      { label: "Preços", href: "#precos" },
      { label: "Integrações", href: "#integracoes" },
      { label: "API", href: "#api" },
    ],
    company: [
      { label: "Sobre", href: "#sobre" },
      { label: "Blog", href: "#blog" },
      { label: "Carreiras", href: "#carreiras" },
      { label: "Contato", href: "#contato" },
    ],
    legal: [
      { label: "Privacidade", href: "#privacidade" },
      { label: "Termos", href: "#termos" },
      { label: "LGPD", href: "#lgpd" },
    ],
  },
  social: [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "LinkedIn", icon: "Linkedin", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
  ],
};
