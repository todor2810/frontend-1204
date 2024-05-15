import React from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../redux/reducers/products';
import { ProductForm } from './ProductForm';
import { Link } from 'react-router-dom';
import { updateProductForm } from '../../redux/actions/products';

const UpdateFormContainer = ({ categories, dispatch, product }) => {
    if (!product) {
        return null;
    }

    return (
        <>
            <Link to='/'>Home</Link>
            <ProductForm
                onSave={(data) => {
                    dispatch(updateProductForm(product.id, data));
                }}
                product={product}
                categories={categories}
            />
        </>
    );
};

const mapStateToProps = (state, { productId }) => ({
    product: getProductById(state, productId),
    categories: state.categories,
});

export default connect(mapStateToProps)(UpdateFormContainer);
