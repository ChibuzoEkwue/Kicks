import Link from "next/link";
import "./ProductCard.scss";
import Image from "next/image";

const Product = ({ brand, title, price, img,id }) => {
	return (
		<Link href={`/products/${id}`} className="productCard">
			<div className="productCard__img">
				<Image  src={img} alt={title} fill/>
			</div>
			<div className="productCard__details">
				<span>{brand}</span>
				<h3>{title}</h3>
				<p>${price}</p>
			</div>
		</Link>
	);
};

export default Product;
