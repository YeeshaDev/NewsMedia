/* eslint-disable @next/next/no-img-element */
import { useEffect,  useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import World from '../src/components/World';
import moment from 'moment';


export default function Home({blogs,category}) {
	const[filter,setFilter] = useState(category);
	//const [categories,setCategories] = useState([])

	

	const uniqueObjects = filter.reduce((a, c) => {
		Object.assign(a, {[c.category]: c});
		return a;
	  }, {});
	  
	  const unique = Object.values(uniqueObjects);

	 /* useEffect(() => {
		const fetchArticle = async() => {
			try {
				const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2MAZaIt96zXjNfmyhXAQl0GSN4Key5cc');
				const article = await res.json();
				console.log(article.results);
				setCategories(article.results);

				
			}catch(error){
				console.log(error)
			}
		}
		fetchArticle();
		},[])*/
	

	  
	  //console.log(filter);
	

//316a577c19404b0da26da52720868967-News api
	//956f4b8bf4986bd46280e6f958ac92c4- API KEY
	//http://api.mediastack.com/v1- ENDPOINT/
	/*const carouselRef = useRef();
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
	 //console.log(blog)*/

	 const truncate = (input) =>
      input?.length > 100 ? `${input.substring(0, 100)}...` : input;

	  const truncatePopular = (input) =>
      input?.length > 100 ? `${input.substring(0, 200)}...` : input;
	 

	return (
		<div className="container">
			<div className="banner-top-thumb-wrap">
				<div className="d-lg-flex justify-content-between col-md-4" >
					{blogs.slice(0,4).map((data) => {
						return (
							<>
								<div  key = {data.id} 
								className="d-flex align-items-center justify-content-between 
								w-100 mb-3 mb-lg-0 mw-lg-50 row-md-5 justify-content-md-center w-md-25">
								<div>
									
							<img
								src={data?.urlToImage  || 'assets/images/dashboard/news.jpg'} 
								alt='thumb'
								className="banner-top-thumb"
								style={{objectFit:'cover'}}
								onError = {e => e.target.style.display = 'none'}
								//style={{...(display ? {} : {display:'none'})}}
								//onLoadingComplete={() =>{setDisplay(true)}}
								
							/>
						</div>
						<h5 className="m-0 font-weight-bold  fs-12 w-75 d-lg-none">
							{data.title}
						</h5>
						<h5 className=" d-none m-0 font-weight-bold text-truncate text-break
						 display-6 d-lg-block" style={{width:11 + 'rem', fontSize:0.9 + 'rem'}}>
							{data.title}
						</h5>
								</div>
								
								</>
							
							
						)
					})}
					
				</div>
			
			</div>
			<div>
				
			<Carousel 
					infiniteLoop={true}
					autoPlay={true}
					emulateTouch={true}
					showThumbs={false}
					showStatus={false}
					width="90%"
					height={300}

				>
				
        
			{blogs.slice(0,4).map((item) => {
				return (
					<div key={item.id}  className='position-relative'>
								<img src={item.urlToImage  || 'assets/images/dashboard/news.jpg'} 
								alt="image1"
								style={{height:30 + 'rem', objectFit:'cover'}}
								onError = {e => e.target.style.display = 'none'}
								/>
								<div className=" position-absolute fixed-bottom">
                                <h3 className=" mb-2  font-weight-bold"
								style={{color:'#fff', fontSize:1 + 'rem'}}> {item.title}</h3>
								<h5 className='mb-5 px-5' 
								style={{color:'#fff', fontSize:0.95 + 'rem'}}>{truncate(item.description)}</h5>
								</div>
								
								
						
                              
  
                                </div> 
								
								
				)
			})}

</Carousel>
</div>
			{/*<div className={`${styles.row} row`}>
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
		</div>*/}
			<div className="world-news">
				<div className="row">
					<div className="col-sm-12">
						<div className="d-flex position-relative float-left">
							<h3 className="section-title">World News</h3>
						</div>
					</div>
				</div>
				<div className="row">
					{unique.slice(0,6).map((item) => {
						
						//console.log();
						return (
							
                             <div  className="col-lg-4 col-sm-6 grid-margin mb-5 mb-sm-2" key={item.id}>
						<div className="position-relative image-hover">
							<img
								 src={item.multimedia?.[0]?.url ?
									`https://nytimes.com/${item.multimedia[0].url}` : 
									'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
								} alt="news-img" 
								className="img-fluid"

								onError = {e => e.target.style.display = 'none'}
							/>
							

							<span className="thumb-title">{item.subsections}</span>
						</div>
						<h5 className="font-weight-bold mt-3">
						
							{item.title}
						</h5>
						<p className="fs-15 font-weight-normal mt-2" >
						{truncate(item.abstract)}
						</p>
						
						<a href={item.url} className="font-weight-bold text-dark pt-2 mb-5">
							Read Article
						</a>
			
					</div>
					
						)
					})}
					{/*<div className="col-lg-3 col-sm-6 grid-margin mb-5 mb-sm-2">
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
				</div>*/}
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
					{blogs.slice(0,1).map((item)=> {
						return (
							<div className="col-lg-6 mb-5 mb-sm-2" key={item.id}>
							<div className="position-relative image-hover">
								<img
									src="assets/images/dashboard/glob.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">NEWS</span>
							</div>
							
							<h1 className=" font-weight-600 mt-3" style={{fontSize: 1.5 + 'rem'}}>
								{item.title}
							</h1>
							<p className="fs-15 font-weight-normal">
								{truncatePopular(item.content)}
							</p>
						</div>
						)
					})}
					
					<div className="col-lg-6 mb-5 mb-sm-2">
						<div className="row">
						{unique.slice(0,4).map((item) => {
						//console.log(item?.category);
						return (
							
                             <div  key={item.url} className="col-sm-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src={item.image || 'assets/images/dashboard/star-magazine-5.jpg'}
								className="img-fluid"
								alt="world-news"
							/>
							

							<span className="thumb-title">{item.category}</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							{item.title}
						</h5>
						<p className="fs-15 font-weight-normal mt-2" >
							{truncate(item.description)}
						</p>
						
						
			
					</div>
					
					
						)
					})}
							{/*<div className="col-sm-6 mb-5 mb-sm-2">
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
							</div>*/}
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
						{unique.slice(0,6).map((item) => {
						//console.log(item?.category);
						return (
							
                             <div  key={item.id} className="col-lg-4 col-sm-6 grid-margin mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
								src={item.urlToImage || 'assets/images/dashboard/art.jpg'}
								className="img-fluid"
								alt="world-news"
							/>
							

							<span className="thumb-title">{item.category}</span>
						</div>

						<h5 className="font-weight-bold mt-3">
							{truncate(item.description)}
						</h5>
						
					</div>
					
						)
					})}
							{/*<div className="col-sm-4 mb-5 mb-sm-2">
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
				</div>*/}
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
							{blogs.slice(0,5).map((data) => {
								
								return (
									<div className="col-sm-12" key={data.id}>
								<div className="border-bottom pb-3">
									<a href={data.url} target='_blank' rel="noreferrer"  className='  text-dark '>
										<h5 className="font-weight-600 mt-0 mb-0 fs-15">
										{data.title}
									</h5></a>
									<p className="text-color m-0 d-flex align-items-center">
										<span className="fs-10 mr-1">{moment(data.publishedAt).fromNow()}</span>
										<i className="mdi mdi-bookmark-outline mr-3"></i>
										<span className="fs-10 mr-1">1</span>
										<i className="mdi mdi-comment-outline"></i>
									</p>
								</div>
							</div>
								)
							})}
							{/*<div className="col-sm-12">
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
							</div>*/}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}

{/*export const getStaticProps = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=316a577c19404b0da26da52720868967')
    const data = await res.json();

    return {
        props: {
            blog:data.articles,
        }
    }
}*/}



export async function getServerSideProps() {
	const [everythingRes, blogRes] = await Promise.all([
	  //fetch('http://api.mediastack.com/v1/news?access_key=956f4b8bf4986bd46280e6f958ac92c4'), 
	  fetch('https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=316a577c19404b0da26da52720868967'),
	  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=316a577c19404b0da26da52720868967')
	]);
	const [everything, blog] = await Promise.all([
	  everythingRes.json(), 
	  blogRes.json()
	]);
	return { props: { 
		category:everything.sources, 
		blogs:blog.articles,
	},

 };
  }

  
