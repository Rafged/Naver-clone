import { Search } from 'lucide-react';
import { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }

    alert(`검색어: ${keyword}`);
  };

  return (
    <section className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-logo">N</div>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn" aria-label="search">
          <Search size={22} />
        </button>
      </form>
    </section>
  );
}

export default SearchBar;