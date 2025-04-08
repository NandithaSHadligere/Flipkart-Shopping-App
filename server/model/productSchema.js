import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const connection = mongoose.connection; // Ensure the database connection is established
const AutoIncrement = AutoIncrementFactory(connection);

const productSchema = new mongoose.Schema({
    id: { type: Number, unique: true }, // Ensure 'id' is a number and unique
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// Apply auto-increment plugin on the 'id' field
productSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Product = mongoose.model('Product', productSchema);

export default Product;
