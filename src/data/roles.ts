
export const roles = [
  {
    title: "Dono",
    badge: "CEO",
    badgeVariant: "owner" as const,
    description: "Autoridade máxima da Berolab com responsabilidades estratégicas e representação externa.",
    responsibilities: [
      "Atua como CEO simbólico da Berolab",
      "Representa a Berolab em parcerias, entrevistas e anúncios externos",
      "Decide sobre mudanças estruturais e reformulações",
      "Criação de novos cargos ou encerramento de áreas do projeto",
      "Delega a gestão do dia a dia para administradores"
    ],
    examples: "Aprovar uma grande parceria com outra comunidade ou streamer"
  },
  {
    title: "Administradores",
    badge: "ADMIN",
    badgeVariant: "admin" as const,
    description: "Responsáveis pela gestão estratégica e operacional da comunidade.",
    responsibilities: [
      "Planejam junto ao dono estratégias trimestrais",
      "Analisam métricas do Discord, formulários, feedbacks e engajamento",
      "Atualizam ou criam Notion, Trello, Google Docs para organização interna",
      "Definem protocolos de atendimento e boas práticas para a equipe"
    ],
    permissions: [
      "Acesso completo a canais de staff",
      "Gerenciar canais, emojis, cargos e bots",
      "Postar em #anúncios e canais de regras"
    ],
    examples: "Criar um formulário para receber denúncias, depois revisar com a moderação sênior"
  },
  {
    title: "Managers",
    badge: "MGR",
    badgeVariant: "manager" as const,
    description: "Responsáveis diretos por áreas específicas como Comunidade, Eventos, Design, Valorant.",
    responsibilities: [
      "Organizam cronogramas semanais de sua área",
      "Ajudam novos membros da equipe a se integrar",
      "Podem sugerir novas rotinas ou ferramentas para sua área",
      "Realizar check-ins semanais no grupo da sua área",
      "Criar documentos de processos para sua área"
    ],
    examples: "Manager de Valorant organiza o campeonato mensal, faz briefing com os moderadores e envia resultado pro ADM"
  },
  {
    title: "Moderadores Sênior",
    badge: "SR MOD",
    badgeVariant: "senior" as const,
    description: "Vice-administradores com responsabilidades ampliadas de moderação e suporte.",
    responsibilities: [
      "Atuam como 'vice-administradores'",
      "Dão suporte direto a novos moderadores",
      "Podem sugerir mudanças nas regras com base em situações vividas",
      "Estão autorizados a dar punições mais graves (ban, mutar por dias)",
      "Manter relatórios de conflitos resolvidos",
      "Ter atitude neutra, ouvindo todos os lados antes de agir"
    ],
    examples: "Um usuário faz denúncia contra outro membro, e o mod sênior chama as partes no privado e resolve com conversa + registro"
  },
  {
    title: "Moderadores",
    badge: "MOD",
    badgeVariant: "moderator" as const,
    description: "Responsáveis por manter o clima saudável nos chats e ajudar novos membros.",
    responsibilities: [
      "Garantem que o clima dos chats esteja saudável",
      "Apagam mensagens ofensivas, racistas, misóginas ou preconceituosas imediatamente",
      "Ajudam em dúvidas básicas: 'Onde vejo as regras?', 'Como entro no torneio?'",
      "Marcam outros membros da equipe quando algo for além do escopo deles",
      "Revezamento de plantão nos horários de pico",
      "Checklists diários: verificar canais fixos, sugestões pendentes, movimentação do chat"
    ],
    examples: "Um membro novo entra, e o moderador envia mensagem de boas-vindas + regras + onde pedir ajuda"
  },
  {
    title: "Suporte",
    badge: "SUPPORT",
    badgeVariant: "support" as const,
    description: "Cargo inicial para novos membros da equipe que estão aprendendo moderação.",
    responsibilities: [
      "Observam e aprendem com moderadores sênior",
      "Respondem dúvidas básicas dos membros sob supervisão",
      "Ajudam na organização de eventos e atividades",
      "Reportam situações que não conseguem resolver",
      "Participam de treinamentos e orientações da equipe"
    ],
    permissions: [
      "Acesso a canais básicos de staff",
      "Timeout temporário em casos simples",
      "Mover usuários entre canais de voz"
    ],
    examples: "Novo membro da equipe ajuda em dúvidas sobre regras enquanto aprende com mod sênior"
  },
  {
    title: "Equipe Berolab",
    badge: "STAFF",
    badgeVariant: "staff" as const,
    description: "Profissionais criativos e técnicos que atuam como uma 'agência interna'.",
    responsibilities: [
      "Edição: responsável por reels, clipes, animações simples",
      "Engenharia: ajuda com bots, sites, integrações",
      "Design: criação de posts, thumbnails, avatares",
      "Conteúdo: escreve roteiros, textos, posts e legendas",
      "Recebem briefings dos managers ou admins"
    ],
    examples: "Designer recebe briefing de evento, cria post para Instagram e manda versão final em 48h"
  },
  {
    title: "Parceiros",
    badge: "PARTNER",
    badgeVariant: "partner" as const,
    description: "Colaboradores externos com benefícios especiais e reconhecimento.",
    responsibilities: [
      "Têm tag especial no servidor",
      "Convites para eventos fechados, podcasts, gravações ou sorteios",
      "Reconhecimento público nas redes da Berolab (com permissão)",
      "Podem sugerir ações conjuntas"
    ],
    examples: "Influenciador parceiro faz live sobre a Berolab e recebe agradecimento oficial com arte exclusiva"
  },
  {
    title: "Boosters Berolab",
    badge: "BOOST",
    badgeVariant: "booster" as const,
    description: "Homenagem temporária para os primeiros apoiadores da comunidade.",
    responsibilities: [
      "Acesso antecipado a eventos e projetos",
      "Canal exclusivo para sugestões VIP",
      "Possível prioridade em futuros processos seletivos"
    ],
    examples: "Booster participa de sessão de feedback com admins sobre a nova temporada"
  },
  {
    title: "Alunos",
    badge: "STUDENT",
    badgeVariant: "student" as const,
    description: "Membros em processo de aprendizado com sistema gamificado opcional.",
    responsibilities: [
      "Aluno Iniciante: está na primeira formação",
      "Aluno Avançado: completou ciclos, participou de eventos",
      "Aluno Destaque: engajado, reconhecido pelos mentores",
      "Receber conhecimento, participar de mentorias, evoluir na comunidade"
    ]
  }
];
