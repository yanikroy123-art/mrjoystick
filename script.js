console.log("script.js carregado com sucesso!");

function comprar(produto) {
  const numero = "258876709289";
  const mensagem = "Olá! Tenho interesse em comprar: " + produto;
  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  window.open(url, '_blank');
}

function filtrar(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  document.querySelectorAll('.card').forEach(function(card) {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function toggleExtras() {
  var main = document.getElementById('page-main');
  var extras = document.getElementById('page-extras');
  var btn = document.getElementById('extras-btn');
  var isExtras = extras.style.display === 'block';

  if (isExtras) {
    main.style.display = 'block';
    extras.style.display = 'none';
    btn.classList.remove('on');
    btn.innerHTML = '+ Mais Produtos';
  } else {
    main.style.display = 'none';
    extras.style.display = 'block';
    btn.classList.add('on');
    btn.innerHTML = '← Loja Principal';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
