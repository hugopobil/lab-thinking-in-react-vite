import { useState } from "react";
import jsonData from "../data";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleChangeSearchBar = (event) => {
    const { value } = event.target;
    const filteredProducts = jsonData.filter((product) => {
      return product.name.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(filteredProducts);
  }

  const handleChangeCheckbox = (event) => {
    const { checked } = event.target;
    const filteredProducts = jsonData.filter((product) => {
      return checked ? product.inStock : true;
    });
    setProducts(filteredProducts);
  }

  return (
    <div className="products-page">
        <h1>IronStore</h1>
        <SearchBar products={products} setProducts={setProducts} handleChangeSearchBar={handleChangeSearchBar} handleChangeCheckbox={handleChangeCheckbox}/>
        <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;