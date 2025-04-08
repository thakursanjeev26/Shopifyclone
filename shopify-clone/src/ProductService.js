import axios from 'axios';

const BASE_URL = 'http://localhost:3000/products';

const ProductService = {
 
  getAll: () => axios.get(BASE_URL),

  getById: (id) => axios.get(`${BASE_URL}/${id}`),


  create: (productData) => axios.post(BASE_URL, productData),

  update: (id, updatedData) => axios.put(`${BASE_URL}/${id}`, updatedData),

  delete: (id) => axios.delete(`${BASE_URL}/${id}`)
};

export default ProductService;
