import React, { useState,useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';

function Slider() {

    const[slider,setSlider] = useState([])
    useEffect(() => {
		const fetchArticle = async() => {
			try {
				const res = await fetch('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=2MAZaIt96zXjNfmyhXAQl0GSN4Key5cc')
				const article = await res.json()
				//console.log(article.results)
				setSlider(article.results)

				
			}catch(error){
				console.log(error)
			}
		}
		fetchArticle();
		},[])

		const truncate = (input) =>
      input?.length > 100 ? `${input.substring(0, 50)}...` : input;

    return (
        <div>
				
			<Carousel 
					infiniteLoop={true}
					autoPlay={true}
					emulateTouch={true}
					showThumbs={false}
					showStatus={false}
					width="100%"
					height={300}

				>
                  {slider.slice(1,7).map((item) => {
						//console.log(item?.category);
						return (
							
                            <div key={item.url}  className='position-relative'>
								<img src={item.multimedia[1].url}
                                alt="news-img" 
								style={{height:30 + 'rem', objectFit:'cover'}}
								
								/>
								<div className=" position-absolute fixed-bottom">
                                <h3 className=" mb-2  font-weight-bold px-3"
								style={{color:'#fff', fontSize:1.2 + 'rem'}}> {truncate(item.title)}</h3>
								<h5 className='mb-5 px-5 mx-auto slider-sub' 
								style={{color:'#fff', fontSize:0.9 + 'rem'}}>{truncate(item.abstract)}</h5>
								
								</div>
  
                                </div> 
                )
            })}

				</Carousel>
						{/*<div className="row">
						{world.slice(0,4).map((item,id) => {
						//console.log(item?.category);
						return (
							
                             <div key={item.url} className="col-sm-6 mb-5 mb-sm-2">
						<div className="position-relative image-hover">
							<img
							 src={item?.multimedia?.[0]?.url ?
                                `https://nytimes.com/${item.multimedia[0].url}` : 
                                'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                            } 
                            alt="news-img" 
                            
                            style={{height:300 + 'px',width:500 + 'px',objectFit:'cover'}}
								className="img-fluid"
							
							/>
							

							<span className="thumb-title ">{item.subsections}</span>
						</div>
						<h5 className="font-weight-bold mt-3">
							{item.title}
						</h5>
						<p className="fs-15 font-weight-normal mt-2" >
							{item.abstract}
						</p>
						
						
			
					</div>
                )
            })}
        </div>*/}

        </div>
    )
}

export default Slider
/* <div key={item.id}  className='position-relative'>
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
								 */