/* eslint-disable @next/next/no-img-element */
export const getStaticProps = async () => {
    const res = await fetch('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=316a577c19404b0da26da52720868967')
    const data = await res.json();
    console.log(data)

	
    return {
        props:{business:data.articles}
    }
}
const business = ({business}) => {
	const truncate = (input) =>
      input?.length > 50 ? `${input.substring(0, 50)}...` : input;
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="text-center">
						<h1 className="text-center mt-5">Business</h1>
						<p className="text-secondary fs-15">
						This page contains all your latest business news and 
						important information happening in cooperate world
						</p>
					</div>
					<h5 className="text-muted font-weight-medium mb-3">World News</h5>
				</div>
			</div>
			<div className="row">
				{business.slice(0,6).map((item) => {
					return (
						<div className="col-lg-6  mb-5 mb-sm-2" key={item.id}>
					<div className="position-relative image-hover">
						<a href={item.url}>
						<img
							src={item.urlToImage || "../assets/images/business/Business_1.jpg"}
							className="img-fluid"
							alt="world-news w-100"
							style={{height:300 + 'px',objectFit:'cover'}}
						/>
						<span className="thumb-title">BUSINESS</span>
						</a>
					</div>
					<a href={item.url} className='text-dark'>
					<h1 className="font-weight-600 mt-3 fs-15">
						{item.title}
					</h1>
					<p className="fs-15 font-weight-normal">
					{item.description}
					</p>
					</a>
					<a href={item.url} style={{color:' #484545'}}>
					<h2 className="font-weight-600 mt-3 fs-15 p-2" style={{borderLeft:'3px solid red', height:7 + 'px', display:'flex', alignItems:'center'}}>{item.source.name}</h2>
					</a>
				</div>
					)
				})}
				{/*<div className="col-lg-6  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src={"../assets/images/business/Business_1.jpg"}
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h1 className="font-weight-600 mt-3">
						Melania Trump speaks about courage at State Department
					</h1>
					<p className="fs-15 font-weight-normal">
						Lorem Ipsum has been the industry&apos;s standard dummy text ever
						since the 1500s, when an unknown printer took a galley of type and
					</p>
				</div>
				<div className="col-lg-6  mb-5 mb-sm-2">
					<div className="row">
						<div className="col-sm-6  mb-5 mb-sm-2">
							<div className="position-relative image-hover">
								<img
									src="../assets/images/business/Business_4.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">BUSINESS</span>
							</div>
							<h5 className="font-weight-600 mt-3">
								A look at California&apos;s eerie plane graveyards
							</h5>
							<p className="fs-15 font-weight-normal">
								Lorem Ipsum has been the industry&apos;s standard dummy text
							</p>
						</div>
						<div className="col-sm-6  mb-5 mb-sm-2">
							<div className="position-relative image-hover">
								<img
									src="../assets/images/business/Business_2.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">BUSINESS</span>
							</div>
							<h5 className="font-weight-600 mt-3">
								The world&apos;s most beautiful racecourses
							</h5>
							<p className="fs-15 font-weight-normal">
								Lorem Ipsum has been the industry&apos;s standard dummy text
							</p>
						</div>
					</div>
					<div className="row mt-3">
						<div className="col-sm-6  mb-5 mb-sm-2">
							<div className="position-relative image-hover">
								<img
									src="../assets/images/business/Business_5.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">BUSINESS</span>
							</div>
							<h5 className="font-weight-600 mt-3">
								Japan cancels cherry blossom festivals over virus fears
							</h5>
							<p className="fs-15 font-weight-normal">
								Lorem Ipsum has been the industry&apos;s standard dummy text
							</p>
						</div>
						<div className="col-sm-6">
							<div className="position-relative image-hover">
								<img
									src="../assets/images/business/Business_3.jpg"
									className="img-fluid"
									alt="world-news"
								/>
								<span className="thumb-title">BUSINESS</span>
							</div>
							<h5 className="font-weight-600 mt-3">
								ClassNameic cars reborn as electric vehicles
							</h5>
							<p className="fs-15 font-weight-normal">
								Lorem Ipsum has been the industry&apos;s standard dummy text
							</p>
						</div>
					</div>
			</div>*/}
			</div>
			<div className="row mt-5">
				<div className="col-sm-12">
					<h5 className="text-muted font-weight-medium mb-3">Popular News</h5>
				</div>
			</div>
			<div className="row mb-4">
				{business.map((item) => {
					return (
						<div className="col-sm-4 col-lg-3 mb-5 mb-sm-2" key={item.id}>
					<div className="position-relative image-hover">
					<a href={item.url} className='text-dark'>
						<img
							src={item.urlToImage || "../assets/images/business/Business_6.jpg"}
							className="img-fluid w-100"
							alt="world-news"
							style={{height:150 + 'px',objectFit:'cover'}}
						/>
						<span className="thumb-title">BUSINESS</span>
						</a>
					</div>
					<a href={item.url} className='text-dark'>
					<h5 className="font-weight-600 mt-3 fs-15">
						{truncate(item.title)}
					</h5>
					</a>
					<h2 className="font-weight-600 mt-3 fs-15 p-2" style={{borderLeft:'3px solid #e6e618', height:7 + 'px', display:'flex', alignItems:'center'}}>{item.source.name}</h2>
				</div>
					)
				})}
				{/*<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_6.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						The island country that gave Mayor Pete his name
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_10.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						Disney parks expand (good) vegan food options
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_14.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						A hot springs where clothing is optional after dark
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_16.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						A hot springs where clothing is optional after dark
					</h5>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_8.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						Japanese chef carves food into incredible pieces of art
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_12.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						The Misanthrope Society: A Taipei bar for people who
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_18.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						From Pakistan to the Caribbean: Curry&apos;s journey
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_20.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						A hot springs where clothing is optional after dark
					</h5>
				</div>
			</div>
			<div className="row mb-4">
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_7.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						The island country that gave Mayor Pete his name
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_11.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						Disney parks expand (good) vegan food options
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_15.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						A hot springs where clothing is optional after dark
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_17.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						A hot springs where clothing is optional after dark
					</h5>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_9.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						Japanese chef carves food into incredible pieces of art
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_13.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						The Misanthrope Society: A Taipei bar for people who
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_19.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						From Pakistan to the Caribbean: Curry&apos;s journey
					</h5>
				</div>
				<div className="col-sm-3  mb-5 mb-sm-2">
					<div className="position-relative image-hover">
						<img
							src="../assets/images/business/Business_21.jpg"
							className="img-fluid"
							alt="world-news"
						/>
						<span className="thumb-title">BUSINESS</span>
					</div>
					<h5 className="font-weight-600 mt-3">
						From Pakistan to the Caribbean: Curry&apos;s journey
					</h5>
			</div>*/}
			</div>
			{/* <!-- container-scroller ends -->
        <!-- partial:../partials/_footer.html --> */}
		</div>
	);
};
export default business;
