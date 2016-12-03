import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search';

const YTKEY = "AIzaSyCCU8OZbVhSfxRvPjNGEYRlZIcAIwjTCI4";

class App extends Component {
  constructor(props){
    super(props);
    YTSearch
  }
  render() {
      return (
        <div>
          <SearchBar />
        </div>
      )
    }
}
ReactDOM.render(<App />, document.getElementById('container'));
