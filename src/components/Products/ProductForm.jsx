import React, { useState, useEffect } from 'react';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { getMultiSelected, repeat } from '../../utils';
import { isCategoriesValid, isNameValid, isExpirationDateValid } from './validators';

export const ProductForm = ({ onSave, product = {}, categories }) => {
    const [name, setName] = useState(product.name || '');
    const [brand, setBrand] = useState(product.brand || '');
    const [rating, setRating] = useState(product.rating || 0);
    const [selectedCategories, setSelectedCategories] = useState(product.categories || []);
    const [itemsInStock, setItemsInStock] = useState(product.itemsInStock || 0);
    const [receiptDate, setReceiptDate] = useState(product.receiptDate || '');
    const [expirationDate, setExpirationDate] = useState(product.expirationDate || '');
    const [featured, setFeatured] = useState(product.featured ?? false);

    const onSubmit = (e) => {
        e.preventDefault();
        onSave({
            name,
            brand,
            rating,
            categories: selectedCategories,
            itemsInStock,
            receiptDate,
            expirationDate,
            featured,
        });
    };

    useEffect(() => {
        if (rating > 8) {
            setFeatured(true);
        }
    }, [rating]);

    const isFormValid = () => {
        return isNameValid(name) && isCategoriesValid(selectedCategories) && isExpirationDateValid(expirationDate);
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                    invalid={!isNameValid(name)}
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                <FormFeedback>Name is required, the length must not be greater than 200</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for='brand'>Brand</Label>
                <Input
                    type='text'
                    name='brand'
                    id='brand'
                    placeholder='Brand'
                    value={brand}
                    onChange={({ target }) => setBrand(target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="rating">Rating</Label>
                <Input
                    type="select"
                    name="rating"
                    id="rating"
                    value={rating}
                    onChange={({ target }) => setRating(Number(target.value))}
                >
                    {repeat(11).map((v) => (
                        <option key={v} value={v}>{v}</option>
                    ))}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="categories">Categories</Label>
                <Input
                    invalid={!isCategoriesValid(selectedCategories)}
                    type="select"
                    name="categories"
                    id="categories"
                    multiple
                    value={selectedCategories}
                    onChange={({ target }) => setSelectedCategories(getMultiSelected(target).map(Number))}
                >
                    {categories.map(({ id, name }) => (
                        <option key={id} value={id}>{name}</option>
                    ))}
                </Input>
                <FormFeedback>A product must have from 1 to 5 categories</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="itemsInStock">Items In Stock</Label>
                <Input type="number" name="itemsInStock" id="itemsInStock" value={itemsInStock}
                    onChange={({ target }) => setItemsInStock(Number(target.value))}
                />
            </FormGroup>
            <FormGroup>
                <Label for="expirationDate">Expiration date</Label>
                <Input
                    invalid={!isExpirationDateValid(expirationDate)}
                    type="date"
                    name="expirationDate"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={({ target }) => setExpirationDate(target.value)}
                />
                <FormFeedback>If a product has an expiration date it must expire not less than 30 days since
                    now</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="receiptDate">Receipt date</Label>
                <Input type="date" name="receiptDate" id="receiptDate" value={receiptDate}
                    onChange={({ target }) => setReceiptDate(target.value)}
                />
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" checked={featured}
                        onChange={({ target }) => setFeatured(target.checked)}
                    />{' '}
                    Featured
                </Label>
            </FormGroup>
            <Button disabled={!isFormValid()}>Submit</Button>
        </Form>
    );
}
