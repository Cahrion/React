import React from "react";
import SelectInput from "../toolbox/SelectInput";
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
            <SelectInput
                name="categoryId"
                label= "Category"
                value= {product.categoryId||""}
                defaultOption="Pls select"
                options={categories.map(category=>({value:category.id,text:category.categoryName}))}
                onChange= {onChange}
                error= "Error"
            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error="Error"
            />
            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error="Error"
            />
            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error="Error"
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}

export default ProductDetail;