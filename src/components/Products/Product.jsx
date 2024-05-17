import React from 'react';
import { Card, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const shortDateFormat = 'MM/DD/YYYY';
const longDateFormat = 'MM/DD/YYYY hh:mm a';

const Product = ({ product, onDelete }) => {
    const receiptDate = product.receiptDate ? dayjs(product.receiptDate).format(shortDateFormat) : '-';
    const expirationDate = product.expirationDate ? dayjs(product.expirationDate).format(shortDateFormat) : '-';
    const createdAt = product.createdAt ? dayjs(product.createdAt).format(longDateFormat) : '-';

    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={`/edit/${product.id}`}>{product.name}</Link>
                    <Button close onClick={() => onDelete(product.id)} />
                </CardTitle>
                <CardText tag="div">
                    <ListGroup>
                        <ListGroupItem>Brand: {product.brand}</ListGroupItem>
                        <ListGroupItem>Rating: {product.rating}</ListGroupItem>
                        <ListGroupItem>Featured: {product.featured ? 'Yes' : 'No'}</ListGroupItem>
                        <ListGroupItem>Items In Stock: {product.itemsInStock}</ListGroupItem>
                        <ListGroupItem>
                            Categories:
                            <ul>
                                {product.categories.map(category => (
                                    <li key={category.id}>{category.name}</li>
                                ))}
                            </ul>
                        </ListGroupItem>
                        <ListGroupItem>Receipt Date: {receiptDate}</ListGroupItem>
                        <ListGroupItem>Expiration Date: {expirationDate}</ListGroupItem>
                        <ListGroupItem>Created At: {createdAt}</ListGroupItem>
                    </ListGroup>
                </CardText>
            </CardBody>
        </Card>
    );
}

export default Product;
