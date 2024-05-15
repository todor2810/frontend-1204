import products from '../mocks/products';

// Mock server
class ProductApi {
    getProducts() {
        return products;
    }
}

export const productApi = new ProductApi();
