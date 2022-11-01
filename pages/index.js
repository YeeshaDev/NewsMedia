/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import { carousels } from '../src/data/db';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	const carouselRef = useRef();
	const [carouselIndex, setcarouselIndex] = useState(3);
	useEffect(() => {
		const carousel = setTimeout(() => {
			carouselIndex >= carousels.length - 1 && setcarouselIndex(0);
			setcarouselIndex(prevIndex => prevIndex + 1);
			carouselRef.current.classList.add(styles.carouselImageAnimation);
			setTimeout(() => {
				carouselRef.current.classList.remove(styles.carouselImageAnimation);
			}, 1000);
		}, 5000);
		return () => {
			clearTimeout(carousel);
		};
	}, [carouselIndex]);

	return (
		<div className="container">
			<div className="banner-top-thumb-wrap">
				<div className="d-lg-flex justify-content-between align-items-center">
					<div className="d-flex justify-content-between mb-3 mb-lg-0">
						<div>
							<img
								src="assets/images/dashboard/star-magazine-1.jpg"
								alt="thumb"
								className="banner-top-thumb"
							/>
						</div>
						<h5 className="m-0 font-weight-bold">
							The morning after: What people
						</h5>
					</div>
					<div className="d-flex justify-content-between mb-3 mb-lg-0">
						<div>
							<img
								src="assets/images/dashboard/star-magazine-2.jpg"
								alt="thumb"
								className="banner-top-thumb"
							/>
						</div>
						<h5 className="m-0 font-weight-bold">How Hungary produced the</h5>
					</div>
					<div className="d-flex justify-content-between mb-3 mb-lg-0">
						<div>
							<img
								src="assets/images/dashboard/star-magazine-3.jpg"
								alt="thumb"
								className="banner-top-thumb"
							/>
						</div>
						<h5 className="m-0 font-weight-bold">
							A sleepy island paradise&aposs most
						</h5>
					</div>
					<div className="d-flex justify-content-between mb-3 mb-lg-0">
						<div>
							<img
								src="assets/images/dashboard/star-magazine-4.jpg"
								alt="thumb"
								className="banner-top-thumb"
							/>
						</div>
						<h5 className="m-0 font-weight-bold">
							America&aposs most popular national
						</h5>
					</div>
				</div>
			</div>
			<div className={`${styles.row} row`}>
				<div className={`${styles.colLgEight} col-lg-8`}>
					<div className="owl-carousel owl-theme" id="main-banner-carousel">
						<div className={`${styles.itemContainer} item`}>
							<div className="carousel-content-wrapper mb-2" ref={carouselRef}>
								<div className="carousel-content">
									<h1 className="font-weight-bold">
										{carousels[carouselIndex].headerText}
									</h1>
									<h5 className="font-weight-normal m-0">
										{carousels[carouselIndex].baseText}
									</h5>
									<p className="text-color m-0 pt-2 d-flex align-items-center">
										<span className="fs-10 mr-1">
											{carousels[carouselIndex].time}
										</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
									</p>
								</div>
								<div className={`${styles.carouselImage} carousel-image`}>
									<img
										src={`assets/images/dashboard/${carousels[carouselIndex].img}.jpg`}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="world-news">
				<div className="row">
					<div className="col-sm-12">
						<div className="d-flex position-relative float-left">
							<h3 className="section-title">World News</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src="assets/images/dashboard/travel.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<span className="thumb-title">TRAVEL</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							Refugees flood Turkey&aposs border with Greece
						</h5>
						<p className="fs-15 font-weight-normal">
							Lorem Ipsum has been the industry&aposs standard dummy text
						</p>
						<a href="#" className="font-weight-bold text-dark pt-2">
							Read Article
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src="assets/images/dashboard/news.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<span className="thumb-title">NEWS</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							South Korea’s Moon Jae-in sworn in vowing address
						</h5>
						<p className="fs-15 font-weight-normal">
							Lorem Ipsum has been the industry&aposs standard dummy text
						</p>
						<a href="#" className="font-weight-bold text-dark pt-2">
							Read Article
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src="assets/images/dashboard/art.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<span className="thumb-title">ART</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							These puppies are training to assist in avalanche rescue
						</h5>
						<p className="fs-15 font-weight-normal">
							Lorem Ipsum has been the industry&aposs standard dummy text
						</p>
						<a href="#" className="font-weight-bold text-dark pt-2">
							Read Article
						</a>
					</div>
					<div className="col-lg-3 col-sm-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src="assets/images/dashboard/business.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<span className="thumb-title">BUSINESS</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							&aposLove Is Blind&apos couple opens up about their first year
						</h5>
						<p className="fs-15 font-weight-normal">
							Lorem Ipsum has been the industry@aposs standard dummy text
						</p>
						<a href="#" className="font-weight-bold text-dark pt-2">
							Read Article
						</a>
					</div>
				</div>
			</div>
			<div className="editors-news">
				<div className="row">
					<div className="col-lg-3">
						<div className="d-flex position-relative float-left">
							<h3 className="section-title">Popular News</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src="assets/images/dashboard/glob.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<span className="thumb-title">NEWS</span>
						</div>
						<h1 className="font-weight-600 mt-3">
							Melania Trump speaks about courage at State Department
						</h1>
						<p className="fs-15 font-weight-normal">
							Lorem Ipsum has been the industry&aposs standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
						</p>
					</div>
					<div className="col-lg-6 mb-5 mb-sm-2">
						<div className="row">
							<div className="col-sm-6 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-5.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">POLITICS</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									A look at California&aposs eerie plane graveyards
								</h5>
								<p className="fs-15 font-weight-normal">
									Lorem Ipsum has been the industry&aposs standard dummy text
								</p>
							</div>
							<div className="col-sm-6 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-6.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">TRAVEL</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									The world&aposs most beautiful racecourses
								</h5>
								<p className="fs-15 font-weight-normal">
									Lorem Ipsum has been the industry&aposs standard dummy text
								</p>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-sm-6 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-7.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">POLITICS</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									Japan cancels cherry blossom festivals over virus fears
								</h5>
								<p className="fs-15 font-weight-normal">
									Lorem Ipsum has been the industry&aposs standard dummy text
								</p>
							</div>
							<div className="col-sm-6">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-8.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">TRAVEL</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									Classic cars reborn as electric vehicles
								</h5>
								<p className="fs-15 font-weight-normal">
									Lorem Ipsum has been the industry&aposs standard dummy text
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="popular-news">
				<div className="row">
					<div className="col-lg-3">
						<div className="d-flex position-relative float-left">
							<h3 className="section-title">Editor choice</h3>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-9">
						<div className="row">
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-9.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">LIFESTYLE</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									The island country that gave Mayor Pete his name
								</h5>
							</div>
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-10.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">SPORTS</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									Disney parks expand (good) vegan food options
								</h5>
							</div>
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-11.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">INTERNET</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									A hot springs where clothing is optional after dark
								</h5>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-12.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">NEWS</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									Japanese chef carves food into incredible pieces of art
								</h5>
							</div>
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-13.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">NEWS</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									The Misanthrope Society: A Taipei bar for people who
								</h5>
							</div>
							<div className="col-sm-4 mb-5 mb-sm-2">
								<div className="position-relative image-hover">
									<img
										src="assets/images/dashboard/star-magazine-14.jpg"
										className="img-fluid"
										alt="world-news"
									/>
									<span className="thumb-title">TOURISM</span>
								</div>
								<h5 className="font-weight-600 mt-3">
									From Pakistan to the Caribbean: Curry&aposs journey
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="position-relative mb-3">
							<img
								src="assets/images/dashboard/star-magazine-15.jpg"
								className="img-fluid"
								alt="world-news"
							/>
							<div className="video-thumb text-muted">
								<span>
									<i className="mdi mdi-menu-right"></i>
								</span>
								LIVE
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="d-flex position-relative float-left">
									<h3 className="section-title">Latest News</h3>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="border-bottom pb-3">
									<h5 className="font-weight-600 mt-0 mb-0">
										South Korea’s Moon Jae-in sworn in vowing address
									</h5>
									<p className="text-color m-0 d-flex align-items-center">
										<span className="fs-10 mr-1">2 hours ago</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
										<span className="fs-10 mr-1">126</span>
										<i className="mdi mdi-comment-outline"></i>
									</p>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="border-bottom pt-4 pb-3">
									<h5 className="font-weight-600 mt-0 mb-0">
										South Korea’s Moon Jae-in sworn in vowing address
									</h5>
									<p className="text-color m-0 d-flex align-items-center">
										<span className="fs-10 mr-1">2 hours ago</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
										<span className="fs-10 mr-1">126</span>
										<i className="mdi mdi-comment-outline"></i>
									</p>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="border-bottom pt-4 pb-3">
									<h5 className="font-weight-600 mt-0 mb-0">
										South Korea’s Moon Jae-in sworn in vowing address
									</h5>
									<p className="text-color m-0 d-flex align-items-center">
										<span className="fs-10 mr-1">2 hours ago</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
										<span className="fs-10 mr-1">126</span>
										<i className="mdi mdi-comment-outline"></i>
									</p>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="pt-4">
									<h5 className="font-weight-600 mt-0 mb-0">
										South Korea’s Moon Jae-in sworn in vowing address
									</h5>
									<p className="text-color m-0 d-flex align-items-center">
										<span className="fs-10 mr-1">2 hours ago</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
										<span className="fs-10 mr-1">126</span>
										<i className="mdi mdi-comment-outline"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* main-panel ends  */}
			{/* <container-scroller ends  */}
		</div>
	);
}
