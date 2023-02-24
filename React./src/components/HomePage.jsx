import Article from './Article';
import Button from './Button'
import Row from './Row';

function HomePage() {
  


    let article1 = {
        cover: 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f50c14b59f4d922fb2b7901_USA-RoninTeam-Bridge-p-500.jpeg',
        category: 'Product',
        publishedAt: 'July 24, 2020',
        title: "Interview - What it's like to work remotely in big sized product development?",
        shortDescription: "People say that developing products isn't easy. Neither it is to build long-distance relationships. But, how about doing both simultaneously?"
    } 
    let article2 = {
      cover: 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4d036d76f2090825900432_Blog%20_%20Cover%20_%20Native%20vs%20Hybrid-p-500.png',
      category: 'Development',
      publishedAt: '2022-03-22',
      title: 'How To implement a website in react',
      shortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
     } 

     let article3={
      cover: 'https://uploads-ssl.webflow.com/5f3fdb4ac2968afe2a89c98b/5f4cfae0b2f9213050bb7765_Blog%20_%20Cover%20_%20Gatsby%20%2B%20WordPress-p-500.png',
      category: 'Development',
      publishedAt: 'July 2, 2020',
      title: 'From monolithic to headless: how and why you should adapt your WordPress Stack',
      shortDescription: "Every dynamic website consists of two main parts: the backend and the frontend. The backend, which in marketing websites is commonly a Content Management System (CMS), allows the website owners...",
    }

    return ( 
        <><div> <center><Article {...article1} /> </center> </div> 
        <br></br>
        <Row>
        <Article {...article2} />
        <Article {...article3} />
      </Row></>
    )
}


export default HomePage;
