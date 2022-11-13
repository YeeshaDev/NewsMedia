/* eslint-disable @next/next/no-img-element */
export const getStaticProps = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=316a577c19404b0da26da52720868967')
    const data = await res.json();
    console.log(data)

	
    return {
        props:{sport:data.articles}
    }
}
const sport = ({sport}) => {
	const truncate = (input) =>
      input?.length > 50 ? `${input.substring(0, 50)}...` : input;

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="text-center">
						<h1 className="text-center mt-5">Sports</h1>
						<p className="text-secondary fs-15">
							This text can be added in the category Description field in
							dashboard
						</p>
					</div>
					<h5 className="text-muted font-weight-medium mb-3">World News</h5>
				</div>
			</div>
			<div className="row">
				{sport.slice(0,10).map((data) => {
					return (
						<div className="col-lg-6  mb-5 mb-sm-2" key={data.id}>
					<div className="position-relative image-hover">
						<img
							src={data.urlToImage || "../assets/images/sports/Sports_1.jpg"}
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">SPORTS</span>
					</div>
					<a href={data.url} className='text-dark'>
					<h1 className="font-weight-600 mt-3 fs-15">
						{data.title}
					</h1>
					<p className="fs-15 font-weight-normal">
						{data.description}
					</p>
					</a>
					<a href={data.url} style={{color:'#484545'}}>
					<h2 className="font-weight-600 mt-3 fs-15 p-2" style={{borderLeft:'3px solid red', 
					height:7 + 'px', display:'flex', alignItems:'center'}}>{data.source.name}</h2>
					</a>
				</div>
					)
				})}
			</div>
			<div className="row mt-5">
				<div className="col-sm-12">
					<h5 className="text-muted font-weight-medium mb-3">Popular News</h5>
				</div>
			</div>
			<div className="row mb-4">
				{sport.map((item) => {
					return (
						<div className="col-sm-4 col-sm-lg-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<a href={item.url}>
						<img
							src={item.urlToImage || "../assets/images/sports/Sports_6.jpg"}
							className="img-fluid w-100"
							alt="world-news"
							style={{height:150 + 'px',objectFit:'cover'}}
							
						/>
						<span className="thumb-title">SPORTS</span>
						</a>
					</div>
					<a href={item.url} className='text-dark'>
					<h5 className="font-weight-600 mt-3 fs-15">
						{truncate(item.title)}
					</h5>
					</a>
					<a href={item.url} style={{color:' #484545'}}>
					<h2 className="font-weight-600 mt-3 fs-15 p-2" style={{borderLeft:'3px solid #e6e618', height:7 + 'px', display:'flex', alignItems:'center'}}>{item.source.name}</h2>
					</a>
				</div>
					)
				})}
				
			</div>
			</div>
	
	);
};
export default sport;
