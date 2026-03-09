export interface QuickLinkItem {
  id: number;
  title: string;
  icon: string;
}

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  source: string;
  time: string;
}

export interface TrendItem {
  id: number;
  keyword: string;
  status: 'up' | 'down' | 'new';
}

export interface WeatherInfo {
  location: string;
  temperature: number;
  description: string;
  high: number;
  low: number;
  dust: string;
}