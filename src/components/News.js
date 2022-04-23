import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps ={
    country:"in",
    pageSize:6

  }
  static propType = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
  }
  
  constructor(props){
    super()
    this.state={
      articles:[],
      loading:false,
      page:1,
      pageSize:props.pageSize,
      totalResults:0,
    }
  }
  
  async updateNews(pageChange){
    /*window.scrollTo(0, 0);*/
    console.log("loadig new")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+pageChange}&pagesize=${this.state.pageSize}&apiKey=c2fece72c9214ffc8fc4caa9f287009b`
    this.setState({
      loading:true,
    })
    let data= await fetch(url);
    let parsedData = await data.json();
    /*window.scrollTo(0, 0);*/
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      page:this.state.page+pageChange,
      loading:false,
      totalResults:parsedData.totalResults,
    }) 
  }

  componentDidMount(){

    this.updateNews(0)
  }

  handleNextClick=()=>{
    this.updateNews(1)
  }

  handlePrevClick=()=>{
    this.updateNews(-1)
  }

  fetchMoreData=()=>{
    this.updateNews(1)
  }


  render() {
    return ( <>
        <h1 className="text-center">Headlines of the day:</h1>
        {this.state.page===1 && this.state.loading?<Spinner/>:<></>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
        <div className="container my-3 d-flex justify-content-center">
        <div className="row my-3">
        {/*!this.state.loading && */this.state.articles.map((element)=>{
        return <div className="col-md-4 my-1 d-flex justify-content-center" key={element.url} >
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} publishTime={element.publishedAt}/>
        </div>
        })}
        </div>
        </div>
      </InfiniteScroll>
      {/*<div className=" d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} className="btn btn-dark">&larr;Previous</button>
      <button type="button" disabled={this.state.page>=this.state.totalPage} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
      </div>*/}  
    </>
    )
  }
}