import React, { useState,useEffect } from 'react'

function World() {

    const[world,setWorld] = useState([])
    useEffect(() => {
		const fetchArticle = async() => {
			try {
				const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2MAZaIt96zXjNfmyhXAQl0GSN4Key5cc')
				const article = await res.json()
				console.log(article.results)
				setWorld(article.results)

				
			}catch(error){
				console.log(error)
			}
		}
		fetchArticle();
		},[])
    return (
        <div className="">
						<div className="row">
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
        </div>

        </div>
    )
}

export default World
