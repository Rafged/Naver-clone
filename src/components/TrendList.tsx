import { trends } from '../data/mockData';

function getStatusLabel(status: 'up' | 'down' | 'new') {
  if (status === 'up') return '▲';
  if (status === 'down') return '▼';
  return 'NEW';
}

function TrendList() {
  return (
    <section className="card trend-card">
      <div className="section-header">
        <h2>실시간 트렌드</h2>
        <button className="text-btn">전체보기</button>
      </div>

      <ol className="trend-list">
        {trends.map((item, index) => (
          <li key={item.id} className="trend-item">
            <div className="trend-left">
              <span className="rank">{index + 1}</span>
              <span className="keyword">{item.keyword}</span>
            </div>
            <span className={`trend-status ${item.status}`}>{getStatusLabel(item.status)}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default TrendList;