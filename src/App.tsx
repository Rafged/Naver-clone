import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginCard from './components/LoginCard';
import NewsSection from './components/NewsSection';
import QuickLinks from './components/QuickLinks';
import SearchBar from './components/SearchBar';
import TrendList from './components/TrendList';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-container">
        <SearchBar />

        <div className="content-layout">
          <section className="left-column">
            <QuickLinks />
            <NewsSection />
          </section>

          <aside className="right-column">
            <LoginCard />
            <WeatherCard />
            <TrendList />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;