import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

   
    constructor() {
        super();
        console.log("Hello I'm constructor from news component")
        this.state = {
            article: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=apple&from=2022-02-10&to=2022-02-10&sortBy=popularity&apiKey=e8b9a270c40f45bd80525e1392d7a3ac";
        let data = await fetch(url);
        let jsonData = await data.json()
        this.setState({article: jsonData.articles})
        console.log(jsonData)
    }

    render() {
        
        return (
            
            <div>
               
                <div className="row">
                    {
                        // console.log(this.state.articals)
                        this.state.article?.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem  title={element ? element.title.slice(0, 45) : ""} description={element ? element.description.slice(0, 50) : "" } imageUrl={element.urlToImage} newsUrl={element.url}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default News