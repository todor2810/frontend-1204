import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ProductsList from './ProductsList';
import { deleteProduct } from '../../redux/actions/products';
import { getCategoriesById } from '../../redux/reducers/categories';

const ProductsContainer = ({ dispatch, products }) => (
    <>
        <Header name="Products" />
        <ProductsList products={products} onDelete={(id) => dispatch(deleteProduct(id))} />
    </>
);

const mapStateToProps = (state) => {
    const categoriesById = getCategoriesById(state);

    const products = state.products.map(product => {
        const categories = product.categories.map(id => categoriesById[id])

        return {
            ...product,
            categories
        };
    });

    return {
        products,
    }
};

export default connect(mapStateToProps)(ProductsContainer);
