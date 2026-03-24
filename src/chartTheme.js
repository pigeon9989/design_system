/**
 * HL Design System — Recharts Theme Preset
 *
 * 사용법:
 *   import { hlColors, hlChartProps } from './chartTheme';
 *   <BarChart {...hlChartProps}> ... </BarChart>
 */

/* 시리즈 색상 (Primary 명도 순) */
export const hlColors = {
  series: ['#002B68', '#00729a', '#00B4ED', '#6bc5ea', '#d5eef9'],
  status: {
    success: '#18864b',
    warning: '#b88b17',
    error:   '#c9302c',
    neutral: '#9da3ad',
  },
};

/* Recharts 공통 속성 */
export const hlChartProps = {
  margin: { top: 8, right: 12, bottom: 4, left: 0 },
};

/* 축 공통 스타일 */
export const hlAxisStyle = {
  fontSize: 11,
  fontFamily: 'Geist Mono, monospace',
  fill: '#9da3ad',
};

/* 그리드 스타일 */
export const hlGridStyle = {
  stroke: '#e2e5e9',
  strokeDasharray: '3 3',
};

/* 툴팁 스타일 */
export const hlTooltipStyle = {
  contentStyle: {
    background: '#fff',
    border: '1px solid #e2e5e9',
    borderRadius: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,.1)',
    fontSize: 13,
    fontFamily: 'Pretendard Variable, Geist, sans-serif',
    padding: '8px 12px',
  },
  labelStyle: { fontWeight: 600, marginBottom: 4 },
  itemStyle: { fontFamily: 'Geist Mono, monospace', fontSize: 12, padding: '2px 0' },
};

/* 범례 스타일 */
export const hlLegendStyle = {
  fontSize: 12,
  fontFamily: 'Pretendard Variable, Geist, sans-serif',
  color: '#555c68',
};
