/** Essência client configuration. Use verified facts and authorized photographs.
 * Set demo:false only after reviewing all demonstration labels and content.
 * Missing WhatsApp keeps the demo dialog; no fake phone numbers are used.
 */
window.ESSENCIA = {
  demo: true,
  whatsapp: '', // Country + area code + number, digits only (example: 55 + DDD + number).
  whatsappMessage: 'Olá! Gostaria de saber mais sobre o atendimento.',
  content: {
    brand: 'essência',
    name: 'Marina Albuquerque',
    professionalLabel: 'Perfil fictício · Psicologia',
    heroDescription: 'Entre o que você sente e o que ainda não consegue dizer, existe um espaço de escuta. E ele pode ser seu.',
    bio: 'Acredito em um cuidado que abre espaço para a pessoa inteira: suas dúvidas, seus vínculos, suas contradições e os caminhos que ainda deseja descobrir.',
    bioSecond: 'Nesta proposta de atendimento, a escuta é o ponto de partida. Um convite para compreender a própria experiência e construir formas mais conscientes de estar na vida.',
    modality: 'Presencial em Maringá & online',
    location: 'Zona 01 · Maringá, PR (exemplo)',
    address: 'Avenida Exemplo, 123 · Sala 04 — Zona 01 · Maringá, Paraná',
    hours: 'Segunda a sexta · 8h às 19h',
    registration: 'Não se aplica à demonstração',
    contactCaption: 'Contato demonstrativo · nenhum envio de mensagem'
  },
  maps: {embed: 'https://www.google.com/maps?q=Maringa%20Parana&z=13&output=embed', route: 'https://www.google.com/maps/search/?api=1&query=Maringa+PR'},
  images: {
    hero: {src:'assets/sala.webp', alt:'Fotografia ilustrativa de uma sala com poltrona, materiais naturais e luz suave'},
    portrait: {src:'assets/marina.webp', alt:'Retrato de banco de imagens usado para ilustrar o perfil fictício de Marina'},
    nature: {src:'assets/natureza.webp', alt:'Luz do sol atravessando uma floresta verde'}
  }
};
