// Example product list — expand as needed
const products = [
  {
    name: "Tirzepatide 10mg",
    price: 55.00,
    img: "https://i.imgur.com/Hgzs2M2.jpeg",
    desc: "99% purity peptide for research use only."
  },
  {
    name: "NAD+ 100mg",
    price: 49.99,
    img: "https://i.imgur.com/ejyxJlj.jpeg",
    desc: "Research‑grade NAD+ 100 mg, lab‑ready."
  },
  {
    name: "BPC‑157 5mg",
    price: 39.00,
    img: "https://i.imgur.com/LhDxZoX.jpeg",
    desc: "BPC‑157 peptide for laboratory applications."
  },
  {
    name: "Semaglutide 2mg",
    price: 75.00,
    img: "https://i.imgur.com/1dsOkZa.jpeg",
    desc: "Semaglutide 2mg – research purposes only."
  }
  // Add more product objects here
];

// Once DOM is ready — build product cards dynamically
window.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.products');
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.dataset.name = product.name;
    card.dataset.price = product.price.toFixed(2);
    card.dataset.img = product.img;
    card.dataset.desc = product.desc;

    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="quick-view">Quick View</button>
    `;
    container.appendChild(card);
  });

  // Then attach quick‑view handlers
  document.querySelectorAll('.quick-view').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      openModal({
        name: card.dataset.name,
        img: card.dataset.img,
        desc: card.dataset.desc,
        price: card.dataset.price
      });
    });
  });
});
