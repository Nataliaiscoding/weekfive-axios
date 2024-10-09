import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      const posts = res.data; //в этом обьекте хранится наша информация, нужно смотреть через консол лог, как называется этот файл
      this.setState({posts})
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => <p key={post.id}> 
          <span> {post.title} </span>
          <span> {post.body} </span>
        </p>)}

      </div> //key={user.id} - прописываем и убираем ошибку
    )
  }
}

export default App;

