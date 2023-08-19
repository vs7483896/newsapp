import React, { Component } from 'react';
import { NewsItem } from './NewsItem';
import { Spinner } from './Spinner';
import { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(1);
    const[totalArticles,settotalArticles]=useState(1);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1, str.length);
    }

    const updateNews=async()=> {
        //console.log("inside update News");
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newskey}&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        props.setProgress(10);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(100);
        setLoading(false);
        //console.log(parsedData);
        setArticles (parsedData.articles);
        settotalArticles(parsedData.totalResults);  // setState is used to set variable declared in class
    }
    useEffect(()=> {  // here we are hitting async request to fetch data from news api using fetch api methods 
        updateNews();
    },[]);

   const fetchMoreData = async() => { 
    // console.log("fetch more called");
    // console.log("before change",articles.length);
       //props.setProgress(10);
       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newskey}&page=${page+1}&pagesize=${props.pagesize}`;
       setPage(page+1); // we are doing page+1 because useState functions are async in nature and it takes time to update and earlier since we used 
                        // before  forming url so url was getting called with same page number without update
       setLoading(true);
       
       let data = await fetch(url);
       //props.setProgress(30);
       let parsedData = await data.json();
       //props.setProgress(100);
       setLoading(false);
    //    console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        settotalArticles(parsedData.totalResults);
        console.log("after change",articles.length);
      };
    // console.log("inside rendering")
        return (
            <div className="container my-3">
                <h1 className="text-center news-heading" style={{marginTop:'85px'}}>Latest News - Top {capitalize(props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalArticles}
                    loader={<Spinner/>} >
                <div className="row container my-6">
                    {articles.map
                        ((element) => {
                            return (<div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title == null ? "" : element.title.slice(0, 44)} description={element.description == null ? "" : element.description.slice(0, 88)} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />  {/*here we are passing props parameter*/}
                            </div>)
                        }
                        )
                    }                    
                </div>
                </InfiniteScroll>
            </div>
        )
    
}
export {News};

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'science'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}