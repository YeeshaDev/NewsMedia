import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
const Navbar = () => {
	const [hamburgerActive, sethamburgerActive] = useState(false);
	const hamburgerRef = useRef();
	const handleHamburger = () => {
		if (!hamburgerActive) {
			hamburgerRef.current.classList.add('hamburgerActive');
			document.querySelector('body').classList.add('layer-open');
			sethamburgerActive(true);
		} else {
			sethamburgerActive(false);
			document.querySelector('body').classList.remove('layer-open');
			hamburgerRef.current.classList.remove('hamburgerActive');
		}
	};
	return (
		<header id="header">
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light">
					<div className="d-flex justify-content-between align-items-center navbar-top">
						{/* <ul className="navbar-left">
					<li>Wed, March 4, 2020</li>
					<li>30°C,London</li>
				</ul> */}
						<div className="logoContainer">
							<Link href="/">
								<a className="navbar-brand">
									<Image
										src="/assets/images/logo.jpg"
										alt="logo"
										width={300}
										height={50}
									/>
								</a>
							</Link>
						</div>
						<div className="d-flex">
							<ul className="social-media">
								<li>
									<Link href="#">
										<a>
											<i className="mdi mdi-instagram"></i>
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<i className="mdi mdi-facebook"></i>
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<i className="mdi mdi-youtube"></i>
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<i className="mdi mdi-linkedin"></i>
										</a>
									</Link>
								</li>
								<li>
									<Link href="#">
										<a>
											<i className="mdi mdi-twitter"></i>
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="navbar-bottom-menu">
						<button
							className="navbar-toggler"
							type="button"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={handleHamburger}
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="navbar-collapse justify-content-center collapse"
							id="navbarSupportedContent"
							ref={hamburgerRef}
						>
							<ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
								<li>
									<button
										className="navbar-close"
										style={{
											display: hamburgerActive ? 'inline-block' : 'none',
										}}
										onClick={handleHamburger}
									>
										<i className="mdi mdi-close"></i>
									</button>
								</li>
								<li className="nav-item active">
									<Link href="/">
										<a className="nav-link active">Home</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/business">
										<a className="nav-link">Business</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/sports">
										<a className="nav-link">Sports</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/author">
										<a className="nav-link">Authority </a>
									</Link>
								</li>
								<li className="nav-item">
									<Link href="/search">
										<a className="nav-link">
											<i className="mdi mdi-magnify"></i>
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
