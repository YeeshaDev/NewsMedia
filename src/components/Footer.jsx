import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="border-top"></div>
					</div>
					<div className="col-sm-3 col-lg-3">
						<ul className="footer-vertical-nav">
							<li className="menu-title">
								<a href="pages/news-post.html">News</a>
							</li>
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="pages/world.html">World</a>
							</li>
							<li>
								<a href="pages/author.html">Magazine</a>
							</li>
							<li>
								<a href="pages/business.html">Business</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-3 col-lg-3">
						<ul className="footer-vertical-nav">
							<li className="menu-title">
								<a href="pages/world.html">World</a>
							</li>
							<li>
								<a href="pages/sports.html">Sports</a>
							</li>
							<li>
								<a href="#">Magazine</a>
							</li>
							<li>
								<a href="pages/author.html">Author</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-3 col-lg-3">
						<ul className="footer-vertical-nav">
							<li className="menu-title">
								<a href="#">Features</a>
							</li>
							<li>
								<a href="pages/news-post.html">Newsletters</a>
							</li>
							<li>
								<a href="#">Live Events</a>
							</li>
							<li>
								<a href="#">Stores</a>
							</li>
							<li>
								<a href="#">Jobs</a>
							</li>
						</ul>
					</div>
					<div className="col-sm-3 col-lg-3">
						<ul className="footer-vertical-nav">
							<li className="menu-title">
								<a href="#">More</a>
							</li>
							<li>
								<a href="#">RSS</a>
							</li>
							<li>
								<a href="#">FAQ</a>
							</li>
							<li>
								<a href="#">User Agreement</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
							<li>
								<a href="pages/aboutus.html">About us</a>
							</li>
							<li>
								<a href="pages/contactus.html">Contact</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="d-flex justify-content-between align-items-center">
							<div className="logoContainer">
								<Image
									src="/assets/images/logo.jpg"
									className="footer-logo"
									alt="logo"
									width={300}
									height={50}
								/>
							</div>
							<div className="d-flex justify-content-end footer-social">
								<h5 className="m-0 font-weight-600 mr-3 d-none d-lg-flex">
									Follow on
								</h5>
								<ul className="social-media">
									<li>
										<a href="#">
											<i className="mdi mdi-instagram"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="mdi mdi-facebook"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="mdi mdi-youtube"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="mdi mdi-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="mdi mdi-twitter"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="d-lg-flex justify-content-between align-items-center border-top mt-5 footer-bottom">
							<ul className="footer-horizontal-menu">
								<li>
									<a href="#">Terms of Use.</a>
								</li>
								<li>
									<a href="#">Privacy Policy.</a>
								</li>
								<li>
									<a href="#">Accessibility & CC.</a>
								</li>
								<li>
									<a href="#">AdChoices.</a>
								</li>
								<li>
									<a href="#">Advertise with us Transcripts.</a>
								</li>
								<li>
									<a href="#">License.</a>
								</li>
								<li>
									<a href="#">Sitemap</a>
								</li>
							</ul>
							<p className="font-weight-medium">
								© 2020
								<Link
									href="https://www.bootstrapdash.com/"
									target="_blank"
									className="text-dark"
								>
									<a>@ BootstrapDash</a>
								</Link>
								, Inc.All Rights Reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
