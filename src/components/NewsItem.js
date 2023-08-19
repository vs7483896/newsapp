import React, { Component } from 'react';

const NewsItem =(props)=> {
        let {title,description,urlToImage,url,author,date,source}=props;  // this is way to get props data into varible using concept of destructuring
        let bmar={
            marginBottom:'0.2rem'
        } 
        /*let badgestyle={
            display:'flex',
            justifyContent:'left-end',
            position:'absolute',
            right:0
        }*/
        {/* using inline styling to paragraph tags we need to add these as a className property*/}
        return (
            <div>
                
                <div className="card">
                    {/* <span className=" position-absolute top-0  translate-middle badge rounded-pill badge bg-danger" style={{zIndex:1, left:'90%'}}>{source?source:""}</span>   it is used to add badge */}
                    <div style={{display:'flex', justifyContent:'left-end', position:'absolute', right:0}}>
                    <span className="badge bg-danger rounded-pill">{source?source:""}</span>   {/* it is used to add badge*/}
                    </div>
                    <img src={urlToImage} className="card-img-top nImage" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text bmar"><small className='text-muted' >By: {author?author:"Unknown"}</small></p>
                            <p className="card-text bmar"><small className='text-muted' >Updated: {date?new Date(date).toGMTString():""}</small></p>
                            <a href={url} target="_blank" className="btn btn-sm btn-secondary">Read more</a>
                        </div>
                </div>
            </div>
        )
    
}

export {NewsItem};