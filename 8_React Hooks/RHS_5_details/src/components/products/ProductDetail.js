import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange
}) => {
    return (
        <form onSubmit={onSave}>
            <h4>{product.id ? "Update" : "Add"}</h4>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName ? product.productName : ""}
                onChange={onChange}
                error="Error"
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}

export default ProductDetail;