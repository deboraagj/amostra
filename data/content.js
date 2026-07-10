/**
 * ============================================================
 * ARQUIVO DE CONTEÚDO — Dra. Rebeca Aragão
 * ============================================================
 * ATENÇÃO: Devido à estrutura do site, este arquivo altera 
 * APENAS as seções de: Contato, Tratamentos, Especialidades 
 * e Depoimentos. 
 * * Textos da capa (Hero), seção "Quem Sou" e "Cartão de Visita" 
 * devem ser alterados DIRETAMENTE nos arquivos .html
 * ============================================================
 */

const CONTENT = {

  /* ==========================================================
     🟢 SEÇÕES DINÂMICAS (Alterar aqui muda no site)
     ========================================================== */

  contato: {
    whatsapp: "http://wa.me/5577988199001",
    whatsappNum: "(77) 98819-9001",
    telefone: "(77) 98819-9001",
    instagram: "https://instagram.com/fisio_rebecaaragao",
    google: "https://share.google/C9dFz98t0YAGcX2uR",
    email: "rebecaaragao.fisio@gmail.com",   // ← substitua
    endereco: "Vitória da Conquista – BA",
    googleMaps: "#",                   // ← substitua pelo link do Google Maps
    siteUrl: "https://www.seusite.com.br"
  },

  especialidadesPrincipais: [
    {
      icon: "dtm",
      nome: "DTM",
      nomeCompleto: "Disfunções Temporomandibulares",
      desc: "Avaliação e tratamento das disfunções da articulação temporomandibular, aliviando dores, limitações de abertura bucal e estalos.",
    },
    {
      icon: "dor",
      nome: "Dor Orofacial",
      nomeCompleto: "Dor Orofacial",
      desc: "Tratamento das dores crônicas e agudas na região da face, boca e estruturas adjacentes, com abordagem multidisciplinar.",
    },
    {
      icon: "zumbido",
      nome: "Zumbido",
      nomeCompleto: "Zumbido",
      desc: "Abordagem fisioterapêutica do zumbido associado a disfunções da ATM e musculatura cervical.",
    },
    {
      icon: "paralisia",
      nome: "Paralisia Facial",
      nomeCompleto: "Paralisia Facial",
      desc: "Reabilitação neuromuscular para recuperação de simetria e função facial, com atendimento presencial e online.",
      destaque: "Presencial & Online",
    },
  ],

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

  tratamentos: [
    {
      // CARD 01
      id: "dtm-caso-1",
      nome: "Tratamento de DTM",
      desc: "Reabilitação funcional com resolução de dor e limitação de abertura bucal.",
      capa: "assets/images/tratamentos/card01/before-01.png",     // ← substitua
      galeria: [
        "assets/images/tratamentos/card01/before-01.png",
        "assets/images/tratamentos/card01/before-02.png",
        "assets/images/tratamentos/card01/after-01.png",
        "assets/images/tratamentos/card01/after-02.png"
      ],
    },
    {
      // CARD 02
      id: "paralisia-caso-1",
      nome: "Paralisia Facial",
      desc: "Recuperação progressiva da simetria e motricidade facial com protocolo especializado.",
      capa: "assets/images/tratamentos/card02/before.png",
      galeria: [
        "assets/images/tratamentos/card02/before.png",
        "assets/images/tratamentos/card02/after.png",
      ],
    },
    {
      // CARD 03

      id: "ortognatica-caso-1",
      nome: "Pós-op Ortognática",
      desc: "Reabilitação completa após cirurgia ortognática, devolvendo função e conforto.",
      capa: "assets/images/tratamentos/card03/before.png",
      galeria: [
        "assets/images/tratamentos/card03/before.png",
        "assets/images/tratamentos/card03/before.png",
      ],
    },
    {
      // CARD 04
      id: "trauma-caso-1",
      nome: "Trauma de Face",
      desc: "Recuperação funcional após trauma facial, restaurando mobilidade e qualidade de vida.",
      capa: "assets/images/tratamentos/card05/before.png",
      galeria: [
        "assets/images/tratamentos/card05/before.png",
        "assets/images/tratamentos/card05/during.png",
        "assets/images/tratamentos/card05/after.png",
      ],
    },
  ],

  depoimentos: [
    {
      nome: "Luca d'El-Rei",
      texto: "Excelente! Profissional com atendimento muito bom, ético e super especializada na área. Com poucas consultas, foi possível perceber grandes mudanças no tratamento. Boa disponibilidade de horários e atenção pós-alta.",
      estrelas: 5,
    },
    {
      nome: "Kelly Moreno",
      texto: "Excelente profissional, atenciosa, carinhosa. Sem falar no atendimento e cuidado. Indico de olhos fechados.",
      estrelas: 5,
    },
    {
      nome: "Caroline Lopes",
      texto: "Atendimento excelente! A fisioterapia facial superou minhas expectativas, desde a recepção até o cuidado no tratamento. Profissional atenciosa, dedicada e com muita paciência, sempre explicando cada passo do processo. Já senti muita diferença na minha recuperação e me sinto cada vez melhor. Recomendo de olhos fechados para quem busca qualidade, acolhimento e resultados de verdade!",
      estrelas: 5,
    },
    {
      nome: "Huly Felix",
      texto: "Profissional incrível, me ajudou no alívio da DTM, coisa que eu nem conhecia, me esclareceu muita coisa, e o alívio da dor foi a melhor parte!!! Indico de olhos fechados… a melhor da região!!!!!!",
      estrelas: 5,
    },
    {
      nome: "Ana Eugênia Mendes Carvalho",
      texto: "Gostei muito do atendimento tive ótimos resultados recomendo muito.",
      estrelas: 5,
    },
    {
      nome: "Cida Santos",
      texto: "Oi a minha experiência na verdade foi pra minha filha que e especial. Ela estava tendo um descolamento do maxilar e tivemos como indicação pra Dr. Rebeca foi muito bom e de total confiança. A minha filha se sentiu muito segura com o atendimento dela. Depois das fisioterapias a minha filha não teve mais nenhum descolamento. Só gratidão por ter uma profissional competente e carinhosa como você Rebeca.",
      estrelas: 5,
    },
  ],

  /* ==========================================================
     🔴 BLOCOS DE BACKUP (Alterar aqui NÃO muda nada no site)
     Esses blocos foram mantidos apenas para você ter um local 
     fácil para copiar e colar os textos diretamente no index.html 
     ou cartao.html quando for editá-los.
     ========================================================== */

  _backupHero: {
    fraseInspiradora: "Cuidar do movimento é devolver qualidade de vida, conforto e confiança para sorrir, falar e viver.",
    descricao: "Especialista no tratamento das disfunções de cabeça, face e pescoço, promovendo alívio da dor, recuperação funcional e melhora da qualidade de vida.",
  },

  _backupQuemSou: {
    texto: `Sou fisioterapeuta e atuo na área de Fisioterapia Bucomaxilofacial...`,
  },

  _backupCartaoVirtual: {
    resumo: "Fisioterapeuta especializada em Fisioterapia Bucomaxilofacial, com foco no tratamento das disfunções de cabeça, face e pescoço...",
  }

};

if (typeof module !== "undefined") module.exports = CONTENT;