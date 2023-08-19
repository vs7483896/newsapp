import React, { Component } from 'react';
import { NewsItem } from './NewsItem';
import { Spinner } from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Ken Sweet",
            "title": "Visa, Mastercard, AmEx to start categorizing gun shop sales - The Associated Press",
            "description": "NEW YORK (AP) — Payment processor Visa Inc. said Saturday that it plans to start separately categorizing sales at gun shops, a major win for gun control advocates who say it will help better track suspicious surges of gun sales that could be a prelude to a ma.",
            "url": "https://apnews.com/4aae50c67e40f9683f604a8683acc391/",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/8fc0c044af78402fbb4ce8aaaef28b27/3000.jpeg",
            "publishedAt": "2022-09-11T08:23:35Z",
            "content": "NEW YORK (AP) Payment processor Visa Inc. said Saturday that it plans to start separately categorizing sales at gun shops, a major win for gun control advocates who say it will help better track susp… [+4830 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Karl Ritter",
            "title": "Last reactor at Ukraine's Zaporizhzhia nuclear plant stopped - The Associated Press",
            "description": "KYIV, Ukraine (AP) — Europe's largest nuclear plant has been reconnected to Ukraine's electricity grid, allowing engineers to shut down its last operational reactor in an attempt to avoid a radiation disaster as fighting rages in the area.",
            "url": "https://apnews.com/article/russia-ukraine-8838067037a8521e3bc764435144d8b7",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/3b51e497fc3042d6897cac1750ed17f2/3000.jpeg",
            "publishedAt": "2022-09-11T06:38:38Z",
            "content": "KYIV, Ukraine (AP) Europes largest nuclear plant has been reconnected to Ukraines electricity grid, allowing engineers to shut down its last operational reactor in an attempt to avoid a radiation dis… [+2371 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Myron Medcalf",
            "title": "Le'Veon Bell TKO's Adrian Peterson in clash of former NFL running backs - ESPN",
            "description": "Le'Veon Bell knocked out Adrian Peterson with a brutal right hand Saturday night in a boxing clash of former star NFL running backs.",
            "url": "https://www.espn.com/boxing/story/_/id/34567767/leveon-bell-tko-adrian-peterson-clash-former-nfl-running-backs",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0911%2Fr1060345_3_1296x729_16%2D9.jpg",
            "publishedAt": "2022-09-11T06:32:47Z",
            "content": "In a boxing match featuring two former star NFL running backs, Le'Veon Bell got the better of Adrian Peterson, rocking him with a hard right hand to score a TKO victory in the fifth round Saturday ni… [+1884 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Khamzat Chimaev Post-Fight Press Conference | UFC 279 - UFC - Ultimate Fighting Championship",
            "description": "Undefeated welterweight Khamzat Chimaev fielded questions from the media at the UFC 279 post-fight press conference following another victory in the co-main ...",
            "url": "https://www.youtube.com/watch?v=DabOdYCmlGc",
            "urlToImage": "https://i.ytimg.com/vi/DabOdYCmlGc/maxresdefault.jpg",
            "publishedAt": "2022-09-11T06:32:19Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "King Charles III News LIVE | King Charles Proclaimed Monarch of Australia | English News LIVE - CNN-News18",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D45xnXaAVr8s",
            "urlToImage": null,
            "publishedAt": "2022-09-11T05:26:04Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Karl Ritter",
            "title": "Russia announces troop pullback from Ukraine's Kharkiv area - The Associated Press",
            "description": "KYIV, Ukraine (AP) — Russia’s Defense Ministry announced Saturday that it was pulling back troops from two areas in Ukraine’s eastern Kharkiv region where a Ukrainian counteroffensive has made significant advances in the past week.",
            "url": "https://apnews.com/article/russia-ukraine-kyiv-world-news-kharkiv-e06b2aa723e826ed4105b5f32827f577",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/9caa1493c9674feeab6e01393a9d5b30/3000.jpeg",
            "publishedAt": "2022-09-11T04:36:22Z",
            "content": "KYIV, Ukraine (AP) Russias Defense Ministry announced Saturday that it was pulling back troops from two areas in Ukraines eastern Kharkiv region where a Ukrainian counteroffensive has made significan… [+7612 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Tariq Malik",
            "title": "SpaceX rocket launches BlueWalker 3, the largest commercial communications array ever, and aces record 14th landing - Space.com",
            "description": "It was SpaceX's 41st launch of 2022 and set more than one new record for the company.",
            "url": "https://www.space.com/spacex-bluewalker-3-starlink-satellites-launch-success",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/WGw96sVyx7TXcZv48fajn9-1200-80.jpg",
            "publishedAt": "2022-09-11T03:30:39Z",
            "content": "SpaceX launched a novel — and colossal — commercial communications satellite into orbit late Saturday and set a new launch record for its Falcon 9 rocket at the same time.\r\nThe Falcon 9 launched into… [+7164 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "nj.com"
            },
            "author": "Bobby Olivier | NJ Advance Media for NJ.com",
            "title": "8 N.J. firefighters injured when 2 fire trucks collide responding to call - NJ.com",
            "description": "Two Paterson fire trucks collided while responding to a call Saturday, injuring multiple firefighters on board",
            "url": "https://www.nj.com/passaic-county/2022/09/8-nj-firefighters-injured-when-2-fire-trucks-collide-responding-to-call.html",
            "urlToImage": "https://www.nj.com/resizer/v4FlDONC4vSeUQzyvoZg4m-ZE3o=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/D3H6RG3GVJGHXMUXKI5TTBVNDA.jpg",
            "publishedAt": "2022-09-11T02:07:00Z",
            "content": "Eight Paterson firefighters were injured when a pair of fire trucks collided Saturday evening while responding to a call, officials said.\r\nAround 5:30 p.m., authorities were responding to a fire at a… [+1123 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Andrew Miller",
            "title": "California beheading victim identified, suspected killer is her child's father who had restraining order - Fox News",
            "description": "A woman beheaded in California has been identified as 27-year-old mother of two Karina Castro and the suspected killer is the father of her youngest daughter.",
            "url": "https://www.foxnews.com/us/california-beheading-victim-identified-suspected-killer-childs-father-had-restraining-order",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Collage-Maker-10-Sep-2022-09.34-PM.jpg",
            "publishedAt": "2022-09-11T02:04:10Z",
            "content": "A Northern California mother of two who was beheaded with a sword last week has been identified and the father of one of her children has been accused of committing the brutal murder.\r\nThe family of … [+2634 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CryptoSlate"
            },
            "author": "Liam 'Akiba' Wright",
            "title": "Google adds Ethereum Merge countdown clock as searches reach all-time high - CryptoSlate",
            "description": "Google Cloud developer Sam Padilla announced Friday that an Ethereum Merge countdown clock is live in the Google Search engine.",
            "url": "https://cryptoslate.com/google-adds-ethereum-merge-countdown-clock-as-searches-reach-all-time-high/",
            "urlToImage": "https://cryptoslate.com/wp-content/uploads/2022/09/google-ethereum-panda.jpg",
            "publishedAt": "2022-09-11T01:15:00Z",
            "content": "Google Cloud developer Sam Padilla announced Friday that an Ethereum Merge countdown clock is live in the Google Search engine. Searches for “Ethereum Merge” now return a native countdown clock along… [+2400 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YourTango"
            },
            "author": "Aria Gmitter",
            "title": "The Love Horoscope For Each Zodiac Sign On Sunday, September 11, 2022 - YourTango",
            "description": "The love horoscope of each zodiac sign in astrology is here for September 11, 2022. Venus in Leo. Check out what the Moon, and stars have in store for you on Sunday with the Sun in Virgo.",
            "url": "https://www.yourtango.com/2022353886/love-horoscope-each-zodiac-sign-sunday-september-11-2022",
            "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/love-horoscope-september-11-2022.jpg?itok=SnR-vuDn",
            "publishedAt": "2022-09-11T01:05:10Z",
            "content": "For Sunday's love and relationship horoscope by zodiac sign, resident astrologer, Aria Gmitter shares how current astrological events affect you on September 11, 2022.\r\nRELATED: The 4 Zodiac Signs Wh… [+3853 chars]"
        },
        {
            "source": {
                "id": "fox-sports",
                "name": "Fox Sports"
            },
            "author": "FOX Sports",
            "title": "College football top plays: Alabama escapes Texas; Wisconsin upset - FOX Sports",
            "description": "Week 2 of college football is underway with Kentucky, Florida, USC, Stanford and more in action. Here are the top plays!",
            "url": "https://www.foxsports.com/stories/college-football/college-football-top-plays-alabama-escapes-texas-wisconsin-upset",
            "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/09/1408/814/09.9.22_CFB-Top-Plays-Week-2_16x9-1.jpg?ve=1&tl=1",
            "publishedAt": "2022-09-11T01:00:03Z",
            "content": "Week 2 of the college football season served up a massive treat for fans, as No. 1 Alabama narrowly escaped Texas, 20-19, in a rare matchup between two of the most storied programs in the country.\r\nI… [+10328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Southern California faces possible flooding from Tropical Storm Kay - CBS Evening News",
            "description": "After enduring a string of historic heatwaves and drought, Southern California is now experiencing heavy rainfall and possible flooding as Tropical Storm Kay...",
            "url": "https://www.youtube.com/watch?v=0N4NDLySyA4",
            "urlToImage": "https://i.ytimg.com/vi/0N4NDLySyA4/maxresdefault.jpg",
            "publishedAt": "2022-09-11T00:56:14Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "TheWrap"
            },
            "author": "Harper Lambert",
            "title": "Harrison Ford, Ke Huy Quan Post Sweet Reunion Snap - TheWrap",
            "description": "Indiana Jones and the Temple of Doom stars Ke Huy Quan and Harrison Ford posed for a reunion photo almost 40 years after co-starring",
            "url": "http://www.thewrap.com/harrison-ford-ke-huy-quan-indiana-jones-reunion-photo/",
            "urlToImage": "https://www.thewrap.com/wp-content/uploads/2022/09/ke-huy-quan-harrison-ford-indiana-jones-and-the-temple-of-doom.jpg",
            "publishedAt": "2022-09-11T00:54:47Z",
            "content": "Harrison Ford and Ke Huy Quan were all smiles in photos taken almost four decades after they teamed up in “Indiana Jones and the Temple of Doom.”\r\nThe actors, now 80 and 51 years old, respectively, p… [+1694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Patrick Hipes",
            "title": "D23 Expo 2022: All The Movie & TV News We Learned From Marvel, Lucasfilm, Pixar, Disney+ And More - Deadline",
            "description": "Disney’s movie and television studios including Marvel Studios, Lucasfilm, Walt Disney Studios, Pixar and Walt Disney Animation Studios, 20th Century Studios and Disney Branded Television revealed plenty of news at the D23 Expo, which ran September 9-11 at th…",
            "url": "https://deadline.com/2022/09/d23-expo-2022-recap-what-we-learned-1235114097/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/09/GettyImages-1243085832.jpg?w=1024",
            "publishedAt": "2022-09-11T00:52:00Z",
            "content": "Disney’s movie and television studios including Marvel Studios, Lucasfilm, Walt Disney Studios, Pixar and Walt Disney Animation Studios, 20th Century Studios and Disney Branded Television revealed pl… [+9169 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Who are the four people Trump and the DOJ have proposed for special master? - The Hill",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL3RoZWhpbGwuY29tL3JlZ3VsYXRpb24vY291cnQtYmF0dGxlcy8zNjM3NTk2LXdoby1hcmUtdGhlLWZvdXItcGVvcGxlLXRydW1wLWFuZC10aGUtZG9qLWhhdmUtcHJvcG9zZWQtZm9yLXNwZWNpYWwtbWFzdGVyL9IBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-09-10T23:37:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Julia Louis-Dreyfus, Sebastian Stan & Wyatt Russell On Announcing 'Thunderbolts' | D23 Expo - The Hollywood Reporter",
            "description": "The cast of 'Thunderbolts' Julia Louis-Dreyfus, Sebastian Stan, and Wyatt Russell talk about making the \"surreal\" announcement for their new Marvel movie at ...",
            "url": "https://www.youtube.com/watch?v=I5nccgbE_GM",
            "urlToImage": "https://i.ytimg.com/vi/I5nccgbE_GM/maxresdefault.jpg",
            "publishedAt": "2022-09-10T22:30:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Swedes head to polls in close-run election marked by crime, energy crisis - Reuters",
            "description": "Swedes voted on Sunday in an election pitting the incumbent centre-left Social Democrats against a right-wing bloc that has embraced the anti-immigration Sweden Democrats in a bid to win back power after eight years in opposition.",
            "url": "https://www.reuters.com/world/europe/swedes-head-polls-close-run-election-marked-by-crime-energy-crisis-2022-09-10/",
            "urlToImage": "https://www.reuters.com/resizer/m8JUL47Zv4vkoWqtG7MbnIbn3Ok=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VPJHQ35EUJNQFNNDH46LYZJ4DE.jpg",
            "publishedAt": "2022-09-10T22:09:00Z",
            "content": "STOCKHOLM, Sept 11 (Reuters) - Swedes voted on Sunday in an election pitting the incumbent centre-left Social Democrats against a right-wing bloc that has embraced the anti-immigration Sweden Democra… [+3633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "iPhone 14 is eSIM-only in the US: Here’s what you need to know - 9to5Mac",
            "description": "In the United States, the new iPhone 14 lineup won’t ship with a physical SIM card slot. Instead, Apple is pivoting entirely to eSIM technology. While some iPhone users may have already made the transition to eSIM, most have not. Ahead of the first iPhone 14 …",
            "url": "https://9to5mac.com/2022/09/10/iphone-14-esim/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-eSIM-Design.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2022-09-10T21:45:00Z",
            "content": "In the United States, the new iPhone 14 lineup won’t ship with a physical SIM card slot. Instead, Apple is pivoting entirely to eSIM technology. While some iPhone users may have already made the tran… [+6799 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "4K ProRes Video Recording on iPhone 14 Pro Still Requires at Least 256GB Model - MacRumors",
            "description": "As was the case with iPhone 13 Pro models released last year, 4K ProRes video recording on the iPhone 14 Pro and iPhone 14 Pro Max still requires a...",
            "url": "https://www.macrumors.com/2022/09/10/4k-prores-video-iphone-14-pro-256gb/",
            "urlToImage": "https://images.macrumors.com/t/4UdtWI63s3vVRjhMIrZUDw7kVbw=/1600x/article-new/2022/09/iPhone-14-Pro-Rear-Camera.jpg",
            "publishedAt": "2022-09-10T21:31:46Z",
            "content": "As was the case with iPhone 13 Pro models released last year, 4K ProRes video recording on the iPhone 14 Pro and iPhone 14 Pro Max still requires a model with at least 256GB of storage, according to … [+1186 chars]"
        }
    ]
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'science'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1, str.length);
    }
    constructor(props) {
        super(props);
        this.state = {  // we use state when we want some value to be updated autometically after some change
            articles: [],
            loading: false,
            page: 1,
            totalArticles: 1
        }
        //let catG=`${this.props.category}`;
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;

    }


    async updateNews() {
        console.log("inside cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.newskey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        this.props.setProgress(10);
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(100);
        this.setState({ loading: false });
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults });  // setState is used to set variable declared in class
    }
    async componentDidMount() {  // here we are hitting async request to fetch data from news api using fetch api methods 
        // console.log("inside cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.newskey}&page=1&pagesize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({loading:false});
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults });  // setState is used to set variable declared in class
        this.updateNews();
    }

    handleNextClick = async () => {

        if (this.state.page + 1 <= Math.ceil(this.state.totalArticles / this.props.pagesize)) {
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.newskey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
            // this.setState ({loading:true});
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // this.setState ({loading:false});
            // console.log(parsedData);
            // console.log("inside next click");
            this.setState({
                page: this.state.page + 1
            });
            this.updateNews();
        }
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.newskey}&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({loading:false});
        // console.log("inside previous data");
        this.setState({
            page: this.state.page - 1
        });
        this.updateNews();
    }

    fetchMoreData = async() => {
       this.setState({page:this.state.page+1})
       //this.props.setProgress(10);
       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey={this.props.newskey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
       this.setState({ loading: true });
       
       let data = await fetch(url);
       //this.props.setProgress(30);
       let parsedData = await data.json();
       //this.props.setProgress(100);
       this.setState({ loading: false });
    //    console.log(parsedData);
       this.setState({ articles: parsedData.articles.concat(parsedData.articles), totalArticles: parsedData.totalResults });
      };


    render() {
        console.log("inside rendering")
        return (
            <div className="container my-3">
                <h1 className="text-center">Latest News - Top {this.capitalize(this.props.category)} Headlines</h1>

                {/* {this.state.loading && <div className="text-center"><Spinner /></div>} this statement says is loading is true the execute the next statement */}
                {/* console.log("articles length:",this.state.articles.length); */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>} >
                
                <div className="row container my-6">
                    {this.state.articles.map
                        ((element) => {
                            return (<div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title == null ? "" : element.title.slice(0, 44)} description={element.description == null ? "" : element.description.slice(0, 88)} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />  {/*here we are passing props parameter*/}
                            </div>)
                        }
                        )
                    }
                    {/* <div className="container my-3 d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}
                    {/* <div className="col-md-4">
                        <NewsItem title="mytitle2" description="my description2" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="mytitle3" description="my description3" />
                    </div> */}
                    
                </div>
                </InfiniteScroll>
            </div>
        )
    }
}