import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavMenu = () => {
	return (
		<nav className="nav">
			<Link href={"/"}>
				<Image src="/logo.svg" width={216} height={30} alt="logo" />
			</Link>
			<ul className="links">
				<li>
					<Link style={{ color: "#fff" }} href={"/about"}>
						About
					</Link>
				</li>
				<li>
					<Link style={{ color: "#fff" }} href={"/blog"}>
						Blog
					</Link>
				</li>
				<li>
					<Link style={{ color: "#fff" }} href={"/users"}>
						Users
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
