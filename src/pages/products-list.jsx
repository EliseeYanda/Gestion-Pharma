import ProductPreview from "../components/product-preview/product-preview";
import ProductService from "../models/services/productService";


function ProductsList () {
    const data = ProductService.getProducts();

    return (
        <>
            <ul>
                {data.map((e) => (
                    <li key={index}>
                        <ProductPreview product={e} seeMore={false}></ProductPreview>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductsList;