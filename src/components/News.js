import PropTypes from 'prop-types'
import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props){

  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(false)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)

  async function updateNews(pageChange){
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+pageChange}&pagesize=${props.pageSize}&apiKey=c2fece72c9214ffc8fc4caa9f287009b`
    setLoading(true)
    let data= await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setPage(page+pageChange)
    setLoading(false)
    setTotalResults(parsedData.totalResults) 
  }


  useEffect(() => {
    updateNews(0)
  }, [])

  // const handleNextClick=()=>{
  //   updateNews(1)
  // }

  // const handlePrevClick=()=>{
  //   updateNews(-1)
  // }

  const fetchMoreData=()=>{
    updateNews(1)
  }

    return ( 
    <>
        <h1 className="text-center">{props.category} : Headlines of the day</h1>
        {page===1 && loading?<Spinner/>:<></>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
        <div className="container my-3 d-flex justify-content-center">
        <div className="row my-3">
        {articles.map((element)=>{
        return <div className="col-md-4 my-1 d-flex justify-content-center" key={element.url} >
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishTime={element.publishedAt}/>
        </div>
        })}
        </div>
        </div>
      </InfiniteScroll> 
    </>
    )
}

News.propType={
  country:PropTypes.string,
  pageSize:PropTypes.number,
}
News.defaultPops={
  country:"in",
  pageSize:6,
}