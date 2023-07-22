import Product from "../Product/ProductCard";
import "./Products.scss";
import { shoes } from "@/shoesData";
const Products = () => {
	return (
		<div className="products">
			{shoes.map((shoe) => (
				<Product
					key={shoe.id}
					brand={shoe.brand}
					img={shoe.img[0]}
					title={shoe.title}
					price={shoe.price}
					id={shoe.id}
				/>
			))}
		</div>
	);
};

export default Products;
