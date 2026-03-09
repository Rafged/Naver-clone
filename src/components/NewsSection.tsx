import { newsList } from '../data/mockData';

function NewsSection() {
  return (
    <section className="card news-card">
      <div className="section-header">
        <h2>뉴스</h2>
        <button className="text-btn">더보기</button>
      </div>

      <div className="news-list">
        {newsList.map((news) => (
          <article key={news.id} className="news-item">
            <span className="news-category">{news.category}</span>
            <div className="news-content">
              <h3>{news.title}</h3>
              <div className="news-meta">
                <span>{news.source}</span>
                <span>·</span>
                <span>{news.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;