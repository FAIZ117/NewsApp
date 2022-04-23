import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url,publishTime,author} = this.props;
    return (
      <div>
        <div className="card h-100" style={{width: "22rem"}}>
          <img style={{ height: "150px", overflow: "hidden"}} src={imageUrl!==null?imageUrl:"https://www.reuters.com/resizer/666OM8e1e0LNitSMHdZ9yznNBJA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WX2VOQNZ6ZJQTFOQMKE234SVEM.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description!==null?description.slice(0,80)+"...":""}</p>
              <p className="card-text"><small className="text-muted">Last updated on {new Date(publishTime).toDateString()} by {author!==null?author:"Unknown"}</small></p>
              <a href={url} className="btn btm-sm btn-primary ">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
