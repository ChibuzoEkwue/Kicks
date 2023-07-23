import "./styles.scss";
import Link from "next/link";
const Orders = () => {
	return (
		<section className="order">
			<div className="container">
				<div className="emptyCard">
					<Link href="/products">Get your first shoe</Link>
				</div>
			</div>
		</section>
	);
};

export default Orders;
