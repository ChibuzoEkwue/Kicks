"use client";
import Image from "next/image";
import "./style.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import successNotification from "@/utils/notification/success";
const data = {
	id: 3,
	brand: "Adidas",
	color: "As shown",
	title: "Hu NWD Animal Print Grey",
	desc: "Offering functional design in which every element and detail serve a purpose",
	price: 28.99,
	img: ["/p7.jpg", "/p8.jpg", "/p9.jpg", "/p10.jpg", "/p11.jpg"],
};

const ProductDetails = () => {
	const [currentImg, setCurrentImg] = useState(0);

	const nextHandler = () => {
		setCurrentImg((prev) => (prev === data.img.length - 1 ? prev : prev + 1));
	};
	const prevHandler = () => {
		setCurrentImg((prev) => (prev === 0 ? 0 : prev - 1));
	};

	const addToCartHandler = () => {
		successNotification("Added to cart");
	};
	return (
		<>
			<section className="container">
				<div className="productDetailCard">
					<div className="left">
						<div className="mainImg">
							<Image
								src={data.img[currentImg]}
								alt=""
								fill
								className="mainImg"
							/>
						</div>
						{data.img.length > 1 && (
							<div className="actions">
								<button onClick={prevHandler} disabled={currentImg === 0}>
									<FontAwesomeIcon icon={faArrowLeft} />
								</button>
								<button
									onClick={nextHandler}
									disabled={currentImg === data.img.length - 1}
								>
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						)}
					</div>
					<div className="right">
						<div className="bp">
							<span className="brand">{data.brand} </span>
							<span className="price">${data.price}</span>
						</div>
						<h1>{data.title}</h1>
						<p>{data.desc}</p>
						<p className="color">Color: {data.color}</p>
						<select>
							{[1, 2, 3, 4, 5].map((num) => (
								<option key={num} value={num}>
									{num}
								</option>
							))}
						</select>
						<div className="actions">
							<button>WishList</button>
							<button onClick={addToCartHandler}>Add to Cart</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductDetails;
