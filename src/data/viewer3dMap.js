// Ключ = id товару з URL (/product-card/<id>), значення = числовий id моделі в 3D-каталозі.
// Товари, яких тут немає, отримують невидимий тригер.
export const viewer3dMap = {
  "6554e61bb0c544704e18d091": 170, // Still
  "69656121bac131269cd2fad9": 171, // Still 2
  // French: 172 — додати ключ, коли товар зʼявиться на сайті
  "69656ba4bac131269cd2fade": 173, // Nord
  "6aad2061325d6ed9dfc4289d": 174, // Skandy
  "6aad20f7325d6ed9dfc4289e": 175, // Skandy Rope
};

export const getViewer3dId = (productId) => viewer3dMap[productId];