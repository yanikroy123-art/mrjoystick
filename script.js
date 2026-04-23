function comprar(produto) {
  const numero = "258876709289";
  const mensagem = `Olá! Tenho interesse em comprar: ${produto}`;
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
}

function filtrar(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function toggleExtras() {
  const main = document.getElementById('page-main');
  const extras = document.getElementById('page-extras');
  const btn = document.getElementById('extras-btn');
  const isExtras = extras.style.display === 'block';

  if (isExtras) {
    main.style.display = 'block';
    extras.style.display = 'none';
    btn.classList.remove('on');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> Mais Produtos`;
  } else {
    main.style.display = 'none';
    extras.style.display = 'block';
    btn.classList.add('on');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg> Loja Principal`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
