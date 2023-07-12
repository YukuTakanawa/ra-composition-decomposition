import './App.css';
import Widgets from './components/Widgets/Widgets';
import News from './components/News/News';
import SearchForm from './components/Search/Search';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <News />
      <SearchForm />
      <Banner img={'https://yandex.ru/images/search?from=tabbar&img_url=http%3A%2F%2Fu.9111s.ru%2Fuploads%2F202206%2F10%2F85c1fa5ceaa05d8bc1b3f093609915d0.jpg&lr=2&p=1&pos=4&rpt=simage&text=%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8%20%D0%BB%D0%BE%D0%B3%D0%BE'} />
      <Widgets />

    </div>

  );
}

export default App;