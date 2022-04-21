import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({
    categories,
    product,
    onSave,
    onChange,
    errors
}) => {
    return (
        <form onSubmit={onSave}>
            <h4>{product.id ? "Update" : "Add"}</h4>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName ? product.productName : ""}
                onChange={onChange}
                error= {errors.productName}
            />
            <SelectInput
                name="categoryId"
                label= "Category"
                value= {product.categoryId||""}
                defaultOption="Pls select"
                options={categories.map(category=>({value:category.id,text:category.categoryName}))}
                onChange= {onChange}
                error= {errors.categoryId}
            />
            <TextInput
                name="unitPrice"
                label="Unit Price"
                value={product.unitPrice}
                onChange={onChange}
                error= {errors.unitPrice}
            />
            <TextInput
                name="quantityPerUnit"
                label="Quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error= {errors.quantityPerUnit}
            />
            <TextInput
                name="unitsInStock"
                label="Units In Stock"
                value={product.unitsInStock}
                onChange={onChange}
                error= {errors.unitsInStock}
            />
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}

export default ProductDetail;