// script.js - interatividade simples
const products = [
  {id:1,name:"Joystick X Pro",price:"MT 3,499",desc:"Com sensores hall, thumbsticks intercambiáveis."},
  {id:2,name:"Joystick Retro",price:"MT 1,299",desc:"Design clássico, botão programável."},
  {id:3,name:"Thumbstick Kit",price:"MT 249",desc:"Conjunto de thumbsticks e capas antiderrapantes."},
  {id:4,name:"Serviço de Calibração",price:"MT 499",desc:"Calibração profissional e ajuste de deadzone."}
];
function renderProducts(){
  const el = document.getElementById('product-list');
  el.innerHTML = products.map(p=>`
    <article class="card">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <p class="price">${p.price}</p>
      <div style="margin-top:0.75rem">
        <button class="btn-secondary" onclick="addToCart(${p.id})">Comprar</button>
        <button class="btn-outline" onclick="openQuickInfo(${p.id})">Mais</button>
      </div>
    </article>
  `).join('');
}
function addToCart(id){
  const p = products.find(x=>x.id===id);
  alert('Adicionado ao carrinho: '+p.name);
}
function openQuickInfo(id){
  const p = products.find(x=>x.id===id);
  alert(p.name + "\n\n" + p.desc + "\nPreço: " + p.price);
}
document.addEventListener('DOMContentLoaded',renderProducts);
