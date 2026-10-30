/** Essência client configuration. Use verified facts and authorized photographs.
 * Set demo:false only after reviewing all demonstration labels and content.
 * Missing WhatsApp keeps the demo dialog; no fake phone numbers are used.
 */
window.ESSENCIA = {
  demo: true,
  whatsapp: '', // Country + area code + number, digits only (example: 55 + DDD + number).
  whatsappMessage: 'Olá! Gostaria de saber mais sobre o atendimento.',
  content: {
    brand: 'Marina A.',
    first: 'Marina',
    last: 'Albuquerque.',
    name: 'Marina Albuquerque',
    professionalLabel: 'Psicóloga · perfil fictício · CRP a personalizar',
    heroDescription: 'Psicoterapia de orientação humanista para adultos. Atendimento presencial em Maringá e online, com escuta, respeito e atenção à sua singularidade.',
    bio: 'Acredito em um cuidado que abre espaço para a pessoa inteira: suas dúvidas, seus vínculos, suas contradições e os caminhos que ainda deseja descobrir.',
    bioSecond: 'Minha proposta demonstrativa segue a Abordagem Centrada na Pessoa. A escuta, a autonomia e o respeito à singularidade orientam os encontros, criando espaço para compreender sentimentos, relações e escolhas.',
    modality: 'Presencial em Maringá & online',
    location: 'Zona 01 · Maringá, PR (exemplo)',
    address: 'Avenida Exemplo, 123 · Sala 04 — Zona 01 · Maringá, Paraná',
    hours: 'Segunda a sexta · 8h às 19h',
    registration: 'Não se aplica à demonstração',
    contactCaption: 'Contato demonstrativo · nenhum envio de mensagem'
  },
  maps: {embed: 'https://www.google.com/maps?q=Maringa%20Parana&z=13&output=embed', route: 'https://www.google.com/maps/search/?api=1&query=Maringa+PR'},
  images: {
    hero: {src:'assets/marina.webp', alt:'Retrato ilustrativo de Marina, uma profissional fictícia'},
    portrait: {src:'assets/marina.webp', alt:'Retrato de banco de imagens usado para ilustrar o perfil fictício de Marina'},
    nature: {src:'assets/natureza.webp', alt:'Luz do sol atravessando uma floresta verde'}
  }
};
