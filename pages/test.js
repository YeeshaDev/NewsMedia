import React from 'react';
import { lazyImages } from '../src/data/db';

export const getStaticProps = async () => {
    const res = await fetch('http://api.mediastack.com/v1/news?access_key=956f4b8bf4986bd46280e6f958ac92c4&keywords=tennis&countries=us,gb,de')
    const data = await res.json();
    console.log(data)

    return {
        props:{result:data.data}
    }
}

function Slider({result}) {

    
    return (
       
        <>
      <h1>testing</h1>
      {result.map((item) => {
        return (
            <div>
                <p>{item.title}</p>
            </div>
        )
      })}
      
        </>
    )
}

export default Slider


{/*<div>
            {magazine.slice(0,5).map((item) => {
                return (
                    <div className="col-lg-6  mb-5 mb-sm-2" key={item.id}>
					<div className="position-relative image-hover">
						<img
							src={item.urlToImage ||  "../assets/images/business/Business_1.jpg"}
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">Entertainment</span>
					</div>
					<h1 className="font-weight-600 mt-3" style={{fontSize:1.5 + 'rem'}}>
						{item.title}
					</h1>
					<p className="fs-15 font-weight-normal">
						{item.description}
					</p>
				</div>
                )
            })}
        </div> */}