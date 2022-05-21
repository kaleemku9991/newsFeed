import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://dynaimage.cdn.cnn.com/cnn/digital-images/org/449b0488-4a8b-454e-a755-171f6d608163.JPG" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem