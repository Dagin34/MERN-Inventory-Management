import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true //.. createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema);
//.. Convers into conventional typing methods (products)
//.. So put in singular and capitalized form of ur collection

export default Product;