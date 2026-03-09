import type { NewsItem, QuickLinkItem, TrendItem, WeatherInfo } from '../types';

export const quickLinks: QuickLinkItem[] = [
  { id: 1, title: '메일', icon: '📧' },
  { id: 2, title: '카페', icon: '☕' },
  { id: 3, title: '블로그', icon: '📝' },
  { id: 4, title: '쇼핑', icon: '🛒' },
  { id: 5, title: '뉴스', icon: '📰' },
  { id: 6, title: '증권', icon: '📈' },
  { id: 7, title: '부동산', icon: '🏠' },
  { id: 8, title: '지도', icon: '🗺️' },
  { id: 9, title: '웹툰', icon: '🎨' },
  { id: 10, title: '치지직', icon: '🎮' },
];

export const newsList: NewsItem[] = [
  {
    id: 1,
    category: 'IT',
    title: '프론트엔드 채용 시장에서 TypeScript 경험의 중요성이 더욱 커지고 있습니다.',
    source: 'Tech Daily',
    time: '1시간 전',
  },
  {
    id: 2,
    category: '경제',
    title: '개발자 포트폴리오에서 실서비스형 프로젝트의 비중이 높아지는 추세입니다.',
    source: 'Biz Korea',
    time: '2시간 전',
  },
  {
    id: 3,
    category: '생활',
    title: '사용자 경험을 고려한 직관적인 UI 설계가 서비스 경쟁력을 좌우합니다.',
    source: 'UX Journal',
    time: '3시간 전',
  },
  {
    id: 4,
    category: '개발',
    title: 'React 기반 대시보드와 포털형 클론 프로젝트가 취업 준비생에게 인기입니다.',
    source: 'Dev Note',
    time: '5시간 전',
  },
  {
    id: 5,
    category: '디자인',
    title: '반응형 레이아웃과 카드형 UI는 현대 웹서비스에서 기본 요소가 되었습니다.',
    source: 'Design Feed',
    time: '어제',
  },
];

export const trends: TrendItem[] = [
  { id: 1, keyword: '프론트엔드 포트폴리오', status: 'up' },
  { id: 2, keyword: 'React TypeScript', status: 'up' },
  { id: 3, keyword: '네이버 클론코딩', status: 'new' },
  { id: 4, keyword: '신입 개발자 면접', status: 'up' },
  { id: 5, keyword: 'UI 컴포넌트 설계', status: 'down' },
  { id: 6, keyword: '반응형 웹', status: 'up' },
  { id: 7, keyword: 'REST API', status: 'new' },
  { id: 8, keyword: '취업용 깃허브', status: 'up' },
  { id: 9, keyword: '웹 접근성', status: 'down' },
  { id: 10, keyword: 'Vite 프로젝트', status: 'up' },
];

export const weatherData: WeatherInfo = {
  location: '서울시',
  temperature: 8,
  description: '맑음',
  high: 12,
  low: 3,
  dust: '보통',
};