/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from '../src/components/Slider';
import moment from 'moment';
import World from '../src/components/World';
import Popular from '../src/components/Popular';
import Technology from '../src/components/Editor';


export default function Home({blogs,category}) {
	//console.log(category)
	const[filter,setFilter] = useState(category);
     // const [categories,setCategories] = useState([])
	 

	const uniqueObjects = filter.reduce((a, c) => {
		Object.assign(a, {[c.category]: c});
		return a;
	  }, {});
	  
	  const unique = Object.values(uniqueObjects);

	  

	  const truncate = (input) =>
      input?.length > 100 ? `${input.substring(0, 100)}...` : input;
	 

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
								src={data?.urlToImage  || 'assets/images/dashboard/star-magazine-8.jpg'} 
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
				
<Slider/>
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
				</div>
				<World/>
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
					{filter.slice(0,1).map((item)=> {
						return (
							<div className="col-lg-6 mb-5 mb-sm-2">
							<div className="position-relative image-hover">
								<img
									src="assets/images/dashboard/glob.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">{item.category}</span>
							</div>

							<p className="fs-15 font-weight-normal mt-4">
								{truncate(item.description)}
							</p>
							<h3 className=" font-weight-600 mt-3 p-2" style={{fontSize: 1 + 'rem',
							 borderLeft:'3px solid red', height:8 + 'px',display:'flex', alignItems:'center'}}>
								{item.name}
							</h3>
							
						</div>
						
						)
					})}
					
					<div className="col-lg-6 mb-5 mb-sm-2">
						<div className="row">
						</div>
						<Popular/>
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
						
						</div>
						<Technology/>
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
									<div className="col-sm-12">
								<div className="border-bottom pb-3">
									<a href={data.url} target='_blank' className='  text-dark '>
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

  