import * as productsActions from '../actions/products';
import { generateId } from '../../utils';

export const isFeatured = ({ rating, featured }) => rating > 8 || featured;

export const products = (state = [], action) => {
    switch (action.type) {
        case productsActions.RECEIVE_PRODUCTS:
            return [
                ...action.products,
            ];
        case productsActions.DELETE_PRODUCT:
            return state.filter((item) => item.id !== action.productId);
        case productsActions.UPDATE_PRODUCT:
            return state.map((item) => {
                if (item.id === action.productId) {
                    return {
                        ...item,
                        ...action.data,
                        featured: isFeatured(action.data)
                    }
                }
                return item;
            });
        case productsActions.CREATE_PRODUCT:
            return state.concat([{
                ...action.data,
                id: generateId(),
                featured: isFeatured(action.data),
                createdAt: new Date(),
            }]);
        default:
            return state;
    }
};

export const getProductById = ({ products }, productId) => products.find(({ id }) => id === productId);
