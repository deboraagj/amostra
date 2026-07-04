/**
 * ============================================================
 * ARQUIVO DE CONTEÚDO — Dra. Rebeca Aragão
 * ============================================================
 * Edite este arquivo para atualizar textos, links e dados.
 * ============================================================
 */

const CONTENT = {

  geral: {
    nome:          "Dra. Rebeca Aragão",
    crefito:       "CREFITO 318120-F",
    especialidade: "Fisioterapia Bucomaxilofacial",
    slogan:        "Cuidando da sua saúde com ciência, dedicação e acolhimento.",
  },

  contato: {
    whatsapp:    "http://wa.me/5577988199001",
    whatsappNum: "(77) 98819-9001",
    telefone:    "(77) 98819-9001",
    instagram:   "https://instagram.com/fisio_rebecaaragao",
    google:      "https://share.google/x750evJ98upDAzn2G",
    email:       "seuemail@email.com",   // ← substitua
    endereco:    "Vitória da Conquista – BA",
    googleMaps:  "#",                    // ← substitua pelo link do Google Maps
    siteUrl:     "https://www.seusite.com.br", // ← substitua pela URL real
  },

  hero: {
    fraseInspiradora: "Cuidar do movimento é devolver qualidade de vida, conforto e confiança para sorrir, falar e viver.",
    descricao: "Especialista no tratamento das disfunções de cabeça, face e pescoço, promovendo alívio da dor, recuperação funcional e melhora da qualidade de vida.",
    foto: "assets/images/foto-hero.jpg",   // ← 960×1280px recomendado
    fotoAlt: "Dra. Rebeca Aragão — Fisioterapeuta Bucomaxilofacial",
  },

  quemSou: {
    foto: "assets/images/foto-sobre.jpg", // ← 800×1000px recomendado
    fotoAlt: "Dra. Rebeca Aragão",
    texto: `Sou fisioterapeuta especializada em Fisioterapia Bucomaxilofacial, uma área que une
      conhecimento aprofundado da anatomia da cabeça, face e pescoço ao cuidado humanizado
      com o paciente. Minha trajetória foi construída com dedicação à formação continuada,
      ao atendimento de excelência e à busca constante por evidências científicas que
      fundamentem cada tratamento.
      <br><br>
      Acredito que cada paciente é único e merece uma avaliação individualizada, um plano
      terapêutico personalizado e, acima de tudo, acolhimento. Meu compromisso é devolver
      a você o conforto, a função e a qualidade de vida que merece.`,
    diferenciais: [
      "Atendimento humanizado",
      "Avaliação individualizada",
      "Tratamento baseado em evidências científicas",
      "Atendimento presencial e online",
    ],
  },

  /* ----------------------------------------------------------
   * TRATAMENTOS REALIZADOS
   * Cada item tem foto de capa e galeria de fotos.
   * Adicione quantos casos quiser seguindo o mesmo padrão.
   * ---------------------------------------------------------- */
  tratamentos: [
    {
      id: "dtm-caso-1",
      nome: "Tratamento de DTM",
      desc: "Reabilitação funcional com resolução de dor e limitação de abertura bucal.",
      capa: "assets/images/tratamentos/dtm-capa.jpg",     // ← substitua
      galeria: [
        "assets/images/tratamentos/dtm-1.jpg",
        "assets/images/tratamentos/dtm-2.jpg",
        "assets/images/tratamentos/dtm-3.jpg",
      ],
    },
    {
      id: "paralisia-caso-1",
      nome: "Paralisia Facial",
      desc: "Recuperação progressiva da simetria e motricidade facial com protocolo especializado.",
      capa: "assets/images/tratamentos/paralisia-capa.jpg",
      galeria: [
        "assets/images/tratamentos/paralisia-1.jpg",
        "assets/images/tratamentos/paralisia-2.jpg",
        "assets/images/tratamentos/paralisia-3.jpg",
      ],
    },
    {
      id: "ortognatica-caso-1",
      nome: "Pós-op Ortognática",
      desc: "Reabilitação completa após cirurgia ortognática, devolvendo função e conforto.",
      capa: "assets/images/tratamentos/ortognatica-capa.jpg",
      galeria: [
        "assets/images/tratamentos/ortognatica-1.jpg",
        "assets/images/tratamentos/ortognatica-2.jpg",
      ],
    },
    {
      id: "trauma-caso-1",
      nome: "Trauma de Face",
      desc: "Recuperação funcional após trauma facial, restaurando mobilidade e qualidade de vida.",
      capa: "assets/images/tratamentos/trauma-capa.jpg",
      galeria: [
        "assets/images/tratamentos/trauma-1.jpg",
        "assets/images/tratamentos/trauma-2.jpg",
      ],
    },
    {
      id: "dor-orofacial-caso-1",
      nome: "Dor Orofacial Crônica",
      desc: "Controle e eliminação de dores crônicas na região orofacial com abordagem multidisciplinar.",
      capa: "assets/images/tratamentos/dor-capa.jpg",
      galeria: [
        "assets/images/tratamentos/dor-1.jpg",
        "assets/images/tratamentos/dor-2.jpg",
      ],
    },
  ],

  /* ----------------------------------------------------------
   * ESPECIALIDADES — hotspots anatômicos
   * position: { x, y } em % relativo à imagem (0–100)
   * side: lado preferencial do card no desktop ("left" | "right")
   * ---------------------------------------------------------- */
  especialidadesPrincipais: [
    {
      id: "dtm",
      icon: "dtm",
      nome: "DTM",
      nomeCompleto: "Disfunções Temporomandibulares",
      desc: "Avaliação e tratamento das disfunções da articulação temporomandibular, aliviando dores, estalos e limitação de abertura bucal.",
      position: { x: 27, y: 47 },
      side: "left",
    },
    {
      id: "dor-orofacial",
      icon: "dor",
      nome: "Dor Orofacial",
      nomeCompleto: "Dor Orofacial",
      desc: "Tratamento das dores crônicas e agudas na face e estruturas adjacentes, com abordagem baseada em evidências.",
      position: { x: 50, y: 62 },
      side: "right",
    },
    {
      id: "zumbido",
      icon: "zumbido",
      nome: "Zumbido",
      nomeCompleto: "Zumbido",
      desc: "Abordagem fisioterapêutica do zumbido associado a disfunções da ATM e da musculatura cervical.",
      position: { x: 76, y: 42 },
      side: "right",
    },
    {
      id: "paralisia-facial",
      icon: "paralisia",
      nome: "Paralisia Facial",
      nomeCompleto: "Paralisia Facial",
      desc: "Reabilitação neuromuscular para recuperação de simetria e função facial. Atendimento presencial e online.",
      position: { x: 50, y: 33 },
      side: "left",
      destaque: "Presencial & Online",
    },
  ],

  /* ----------------------------------------------------------
   * PÓS-OPERATÓRIO — procedimentos
   * ---------------------------------------------------------- */
  posOperatorio: [
    {
      num: "01",
      nome: "Cirurgia Ortognática",
      icon: "ortognatica",
      desc: "Acompanhamento fisioterapêutico pré e pós-operatório de cirurgia ortognática. Auxilia no controle do edema, recuperação da mobilidade mandibular e readaptação funcional.",
      beneficios: ["Redução do edema", "Recuperação da mobilidade", "Readaptação funcional"],
    },
    {
      num: "02",
      nome: "Discopexia",
      icon: "discopexia",
      desc: "Reabilitação após discopexia da ATM, com protocolos específicos para restabelecer a função articular e eliminar sintomas residuais.",
      beneficios: ["Função articular", "Redução de dor", "Qualidade de vida"],
    },
    {
      num: "03",
      nome: "Artroscopia da ATM",
      icon: "artroscopia",
      desc: "Cuidados fisioterapêuticos pós-artroscopia, promovendo recuperação segura, manutenção dos resultados cirúrgicos e prevenção de recidivas.",
      beneficios: ["Recuperação segura", "Manutenção dos resultados", "Prevenção de recidivas"],
    },
    {
      num: "04",
      nome: "Traumas de Face",
      icon: "trauma",
      desc: "Tratamento das sequelas musculares, articulares e neurológicas decorrentes de traumas faciais e fraturas, devolvendo função e estética.",
      beneficios: ["Recuperação muscular", "Função articular", "Resultado estético"],
    },
  ],

  /* ----------------------------------------------------------
   * DEPOIMENTOS
   * ---------------------------------------------------------- */
  depoimentos: [
    {
      nome: "Maria Clara S.",
      texto: "A Dra. Rebeca foi fundamental na minha recuperação pós-cirurgia. Atendimento impecável, cuidadoso e muito profissional. Voltei a sorrir sem dor!",
      estrelas: 5,
    },
    {
      nome: "João Paulo M.",
      texto: "Sofria de dores na mandíbula há anos. Após o tratamento, minha qualidade de vida mudou completamente. Recomendo de olhos fechados.",
      estrelas: 5,
    },
    {
      nome: "Ana Beatriz L.",
      texto: "Atendimento humanizado, ambiente acolhedor e profissional extremamente competente. A melhor decisão que tomei foi iniciar o tratamento aqui.",
      estrelas: 5,
    },
    {
      nome: "Carlos Eduardo R.",
      texto: "O acompanhamento online para paralisia facial foi incrível. Evolui muito sem precisar sair de casa. Dra. Rebeca é referência na área.",
      estrelas: 5,
    },
    {
      nome: "Fernanda Costa",
      texto: "Tive resultados que nunca imaginei após o pós-operatório. A dedicação e o conhecimento da Dra. Rebeca fazem toda a diferença no tratamento.",
      estrelas: 5,
    },
  ],

  /* ----------------------------------------------------------
   * CARTÃO DE VISITA VIRTUAL
   * ---------------------------------------------------------- */
  cartao: {
    foto: "assets/images/foto-hero.jpg", // ← pode ser outra foto específica
    resumo: "Fisioterapeuta especializada em Fisioterapia Bucomaxilofacial, com foco no tratamento das disfunções de cabeça, face e pescoço. Atendimento humanizado, baseado em evidências científicas e comprometido com a qualidade de vida dos pacientes.",
  },
};

if (typeof module !== "undefined") module.exports = CONTENT;