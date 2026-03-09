import { quickLinks } from '../data/mockData';

function QuickLinks() {
  return (
    <section className="card quick-links-card">
      <div className="section-header">
        <h2>바로가기</h2>
      </div>
      <div className="quick-links-grid">
        {quickLinks.map((item) => (
          <button key={item.id} className="quick-link-item">
            <span className="quick-link-icon">{item.icon}</span>
            <span className="quick-link-title">{item.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;