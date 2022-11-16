import React,{useState,useEffect} from 'react'

function Popular() {
    const[world,setWorld] = useState([])
    useEffect(() => {
		const fetchWorld = async() => {
			try {
				const res = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2MAZaIt96zXjNfmyhXAQl0GSN4Key5cc')
				const article = await res.json()
				//console.log(article.results)
				setWorld(article.results)

				
			}catch(error){
				console.log(error)
			}
		}
		fetchWorld();
		},[])

		
        //This is filters out data  with the same sections and returns a new properties with unique sections
  const unique = world.filter((value,index,self) => self.map(category => category.section).indexOf(value.section) === index)
		//console.log(unique)

		//This truncates/reduces the length of a text
		const truncate = (input) =>
      input?.length > 100 ? `${input.substring(0, 50)}...` : input;

    return (
        <div className="row">
					{unique.slice(10,-1).map((item) => {
						
						//console.log();
						return (
							
                             <div  className="col-sm-6 mb-5 mb-sm-2" key={item.url}>
						<div className="position-relative image-hover">
							<img
								 src={item.multimedia[1].url}
								  alt="news-img" 
								className="img-fluid"
							/>
							

							<span className="thumb-title">{item.section.toUpperCase()}</span>
						</div>
                        <a href={item.url} className='text-dark'>
						<h5 className="font-weight-bold mt-3">
						
							{item.title}
						</h5>
						<p className="fs-15 font-weight-normal mt-2" >
						{truncate(item.abstract)}
						</p>
						
						
						</a>
			
					</div>
					
						)
					})}
					</div>
    )
}

export default Popular;
