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
    googleMaps: "https://www.google.com/search?q=vitoria+da+conquista&sca_esv=f70ce224cd0841f2&sxsrf=APpeQnsJlHxBlk_g4nPKSESuIA6Azrl1mg%3A1783962183647&ei=RxpVaof_JsjM1sQPrbDd2Ao&biw=1358&bih=602&gs_ssp=eJzj4tTP1TdIs0xJMzRg9BIpyyzJL8pMVEhJVEjOzysszSwuSQQAq8kLEg&oq=vito&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHZpdG8qAggEMggQLhixAxiABDIIEAAYgAQYsQMyChAAGIAEGIoFGEMyBRAAGIAEMggQLhiABBixAzIFEAAYgAQyCBAuGIAEGLEDMg4QABiABBiKBRixAxiDATIFEC4YgAQyCBAAGIAEGLEDMhcQLhixAxiABBiXBRjcBBjeBBjgBNgBAUjzJVC9B1izGHACeACQAQSYAboBoAGRC6oBAzAuObgBAcgBAPgBAZgCB6AC4QaoAhTCAgoQABiABBgNGLADwgIJEAAYHhgNGLADwgIHEAAYHhiwA8ICBBAjGCfCAgUQABjvBcICBxAjGOoCGCfCAhAQABgDGI8BGOoCGLQC2AEBwgIQEC4YAxiPARjqAhi0AtgBAcICBBAuGCfCAg4QLhiABBixAxjHARjRA8ICCxAuGIMBGLEDGIAEwgIREC4YlwUY3AQY3gQY4ATYAQHCAgsQLhiABBixAxiDAcICDRAuGIAEGIoFGEMYsQOYAw7xBadgefysJPgriAYBkAYKugYGCAEQARgKkgcDMi41oAfV3gGyBwMwLjW4B8kGwgcFMi0zLjTIBzmACAE&sclient=gws-wiz-serp",                   // ← substitua pelo link do Google Maps
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
      id: "01",
      nome: "Paralisia Facial",
      desc: "Evolução expressiva na oclusão ocular e simetria do sorriso. Os resultados foram potencializados pela excelente adesão da paciente ao protocolo clínico.",
      capa: "assets/images/tratamentos/card01/capa.png",
      galeria: [
        "assets/images/tratamentos/card01/before-01.png",
        "assets/images/tratamentos/card01/after-02.png",
        "assets/images/tratamentos/card01/before-02.png",
        "assets/images/tratamentos/card01/after-03.png"
      ],
    },
    {
      // CARD 02
      id: "02",
      nome: "Paralisia Facial",
      desc: "Intervenção precoce iniciada no 4º dia de paralisia facial. O rápido início da reabilitação fisioterapêutica garantiu uma recuperação neuromotora progressiva e consistente a cada novo atendimento.",
      capa: "assets/images/tratamentos/card02/capa.png",
      galeria: [
        "assets/images/tratamentos/card02/before.png",
        "assets/images/tratamentos/card02/after.png",
        "assets/images/tratamentos/card02/before-eye.png",
        "assets/images/tratamentos/card02/after-eye.png",
      ],
    },
    {
      // CARD 03

      id: "03",
      nome: "Paralisia Facial",
      desc: "Resultados funcionais alcançados através da constância. A adesão rigorosa ao plano terapêutico e às orientações clínicas reverteu o quadro inicial e entregou uma excelente evolução",
      capa: "assets/images/tratamentos/card03/capa.png",
      galeria: [
        "assets/images/tratamentos/card03/before-02.png",
        "assets/images/tratamentos/card03/after-01.png",
        "assets/images/tratamentos/card03/before-smile.png",
        "assets/images/tratamentos/card03/after-smile.png"
      ],
    },
    {
      // CARD 04
      id: "04",
      nome: "Pós-Ortognática",
      desc: "Intervenção iniciada no 4º dia de pós-operatório. O acompanhamento fisioterapêutico precoce garantiu uma evolução segura e contínua da amplitude de abertura bucal a cada novo atendimento.",
      capa: "assets/images/tratamentos/card04/capa.png",
      galeria: [
        "assets/images/tratamentos/card04/before.png",
        "assets/images/tratamentos/card04/during.png",
        "assets/images/tratamentos/card04/after.png",
      ],
    },
    {
      // CARD 05
      id: "05",
      nome: "Pós-Ortognática",
      desc: "Reabilitação pós-operatória tardia (iniciada aos 2 meses). Tratamento focado na recuperação da amplitude de abertura bucal, função mastigatória e melhora da dormência no queixo, um resultado fantástico.",
      capa: "assets/images/tratamentos/card05/capa.png",
      galeria: [
        "assets/images/tratamentos/card05/before.png",
        "assets/images/tratamentos/card05/during.png",
        "assets/images/tratamentos/card05/after.png",
      ],
    },
    {
      // CARD 06
      id: "06",
      nome: "Pós-Ortognática",
      desc: "Foco na reabilitação da função mastigatória. O empenho da paciente no tratamento e o cumprimento rigoroso das orientações clínicas trouxeram resultados progressivos e uma excelente recuperação.",
      capa: "assets/images/tratamentos/card06/capa.png",
      galeria: [
        "assets/images/tratamentos/card06/before.png",
        "assets/images/tratamentos/card06/during.png",
        "assets/images/tratamentos/card06/after.png",
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