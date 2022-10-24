const API_SERVER = "http://localhost:8082";

export const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => {
    try {
      return res.json();
    } catch (error) {
      console.error(error);
    }
  });

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
