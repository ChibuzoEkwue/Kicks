import Link from "next/link";
import "./NavBar.scss";

const NavBar = () => {
	return (
		<nav>
			<div className="container">
				<div className="navBar">
					<div className="logoCard">
						<Link className="logo" href="/">
							Kicks
						</Link>
					
					</div>

					<div className="navItems">
						<Link className="navitem" href="/login">
							Login
						</Link>
						<Link className="navitem" href="/register">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
