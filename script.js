const products = [
  { title: "Men's T-Shirt", price: 19.99, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
  { title: "Women's Handbags", price: 30.99, image: "https://img.kwcdn.com/product/open/2022-11-19/1668850905851-c7f1dae62c3343d2ba76abba762f6309-goods.jpeg" },
  { title: "Baby Girl Pink Frock", price: 30.0, image: "https://cpimg.tistatic.com/08444181/b/4/Girls-Light-Pink-Frock.jpg" },
  { title: "Teddy Bears Set", price: 50, image: "https://img.freepik.com/premium-photo/two-cute-teddy-bears-white-background-pink-blue-toy-bears_662113-485.jpg" },
  { title: "Cute Hair Band", price: 25.99, image: "https://down-ph.img.susercontent.com/file/sg-11134201-7qvfy-ljtcpl2shn6fae" },
  { title: "Artificial Nails", price: 50, image: "https://www.dhresource.com/0x0/f2/albu/g13/M00/27/81/rBVakl9LfCmAVOgGAANEw28Lo7s643.jpg/20pcs-set-acrylic-candy-color-finish-nail.jpg" },
  { title: "Make-up Kit", price: 200, image: "https://i.pinimg.com/736x/9d/a4/ff/9da4ff9d31bd1bbee875f8bc7d03b111.jpg" },
  { title: "Smart Watch", price: 99.99, image: "https://cdn.mos.cms.futurecdn.net/DxpaKaHPBL5yF8vBjh2MjX.jpg" },
];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const search = document.getElementById("searchInput")?.value.toLowerCase() || "";
  const filtered = products.filter(p => p.title.toLowerCase().includes(search));

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button onclick='addToCart(${JSON.stringify(p)})'>Add to Cart</button>
    `;
    grid.appendChild(div);
  });
}

function addToCart(p) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(p);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = cart.length;
}

window.onload = () => {
  renderProducts();
  updateCartCount();
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", renderProducts);
};