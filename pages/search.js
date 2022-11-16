import React,{useEffect, useState} from 'react'
import SearchForm from '../src/components/SearchForm'



function Search() {
    const[loading,setLoading] = useState(true)
    const[articles,setArticles]= useState([])
    const [query,setQuery] = useState('everything')
    

    useEffect(() => {
    const fetchArticle = async() => {
        try {
            const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=ktzijEep1Bft2q1mhqevmATnyOvH39Jr`)
            const article = await res.json()
            setArticles(article.response.docs)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }
    fetchArticle();
    },[query])

    
    const truncate = (input) =>
    input?.length > 100 ? `${input.substring(0, 100)}...` : input;
    //https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ktzijEep1Bft2q1mhqevmATnyOvH39Jr
//https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
    return (
        <div className='container'>
            <div className="row">
				<div className="col-sm-12">
					<div className="text-center"></div>
            <div>
                <SearchForm inputText ={(text) => setQuery(text)}/>
                <h1 className='text-center my-4'>Showing results for {query}</h1>
                
            </div>
            </div>
            </div>
            {loading ? 
            (<div className='spinner-3'></div>
            ) : (
                <section className='row'>
                {articles.map((data) => {
             const{_id,news_desk
             ,web_url,multimedia,subsection_name,snippet}=data
                 return(
                     <article key={_id} className="col-lg-6  mb-5 mb-sm-2">
                         <img src={multimedia?.[0]?.url ?
                             `https://nytimes.com/${multimedia[0].url}` : 
                             'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                         } alt="news-img" 
                         
                         style={{height:300 + 'px',width:500 + 'px',objectFit:'cover'}}/>
                         <a href={web_url} target='_blank'  rel="noreferrer"  className='text-dark'>
                             <h1 className=' mt-4' style={{fontSize:1.5 + 'rem'}}> {data.headline.main}</h1></a>
                       <h4 className='fs-15 mt-2 mb-2'>{data.byline.original}</h4>
                       <p>{truncate(snippet)}</p>
     
                       <a href={web_url} style={{color:'#484545'}}>
                         <h2 className="font-weight-600 mt-3 fs-15 p-2" style={{borderLeft:'3px solid red', 
                         height:10 + 'px', display:'flex', alignItems:'center'}}>{subsection_name || news_desk}</h2>
                         </a>
                       
                     </article>
                     
                 )
                })}
                </section> 
            )}
        </div>
    )
}

export default Search

/*export const getStaticProps = async () => {
    const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=ktzijEep1Bft2q1mhqevmATnyOvH39Jr`)
    const data = await res.json();
    console.log(data)

	
    return {
        props:{article:data.response.docs}
    }
}*/