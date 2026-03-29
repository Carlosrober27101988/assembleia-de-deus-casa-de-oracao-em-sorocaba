const phoneNumber = '5511912345678'; // formatação internacional sem +
const emailAddress = 'contato@casadeoracao.com.br';

function openWhatsApp() {
  const text = encodeURIComponent('Olá, gostaria de obter mais informações.');
  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, '_blank');
}

function openEmail() {
  const subject = encodeURIComponent('Contato pelo site');
  const body = encodeURIComponent('Olá, estou entrando em contato via formulário do site.');
  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
}

function sendFeedback() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('feedback');

  if (!name || !email || !message) {
    feedback.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    feedback.style.color = '#912e38';
    return;
  }

  feedback.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
  feedback.style.color = '#1f5f21';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

window.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('btnWhatsapp');
  const emailBtn = document.getElementById('btnEmail');
  const sendBtn = document.getElementById('btnSend');

  if (whatsappBtn) whatsappBtn.addEventListener('click', openWhatsApp);
  if (emailBtn) emailBtn.addEventListener('click', openEmail);
  if (sendBtn) sendBtn.addEventListener('click', sendFeedback);
});
