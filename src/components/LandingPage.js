import React from 'react';
import NewsCard from './NewsCard';
import axios from 'axios';
import Arraay from './Arraay';
import logo from '../logogo.png';

function LandingPage(props) {
  // Fetch news articles from NewsAPI
  const [newsArticles, setNewsArticles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d8252cced4694cf59ef6f19e2e2a81e2&pageSize=10'
      )
      .then(res => setNewsArticles(res.data.articles))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='headerer'>
      <header >
        <img src={logo} alt="Logo" className="logo" height="100" />
      </header></div>
      <br />
      <br />

      <h1 style={{color: "white"}}>Carousel of advisors</h1>

      <Arraay cards={props.advisors} />

      <br/>

      <h1 style={{color: "white"}}>Carousel of plans</h1>

      <Arraay cards={props.plans} />

      <br/>

      <h2 style={{color: "white"}}>Latest News</h2>
      <br/>

      <div className="news-cards-container">
        
          {newsArticles.map(article => (
            <NewsCard
              key={article.url}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          ))}
      
      </div>
    </div>
  );
}

export default LandingPage;