import api from "./api-config";

export const addProductToCategory = async (categoryId, productId) => {
  const resp = await api.put(`/categories/${categoryId}/products/${productId}`);
  return resp.data;
};
