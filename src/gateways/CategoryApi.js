import categories from '../mocks/categories';

// Mock server
class CategoryApi {
    getCategories() {
        return categories;
    }
}

export const categoryApi = new CategoryApi();
