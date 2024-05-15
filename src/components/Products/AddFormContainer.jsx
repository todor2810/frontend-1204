import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductForm } from './ProductForm';
import { createProductForm } from '../../redux/actions/products';

const AddFormContainer = ({ categories, dispatch }) => (
    <>
        <Link to='/'>Home</Link>
        <ProductForm
            onSave={(data) => {
                dispatch(createProductForm(data));
            }}
            categories={categories}
        />
    </>
);

const mapStateToProps = (state) => ({
    categories: state.categories,
});

export default connect(mapStateToProps)(AddFormContainer);
