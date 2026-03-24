import { Link } from 'react-router-dom';

const components = [
  { id: 'button', name: 'Button', desc: '클릭 액션. Primary, Secondary, Ghost, Danger 변형.', icon: 'icon-mouse-pointer' },
  { id: 'badge', name: 'Badge', desc: '상태 표시. Success, Warning, Error, Info, Neutral.', icon: 'icon-tag' },
  { id: 'input', name: 'Input', desc: '텍스트 입력, 셀렉트, 라벨, 에러 상태.', icon: 'icon-text-cursor' },
  { id: 'card', name: 'Card', desc: '콘텐츠 그룹핑 컨테이너. Head, Body, Foot.', icon: 'icon-credit-card' },
  { id: 'kpi', name: 'KPI Card', desc: '핵심 지표 표시. 라벨, 값, 단위, 트렌드.', icon: 'icon-trending-up' },
  { id: 'table', name: 'Table', desc: '데이터 테이블. 정렬, 선택, 확장, 페이지네이션.', icon: 'icon-table' },
  { id: 'filter-bar', name: 'Filter Bar', desc: '검색, 필터, 날짜 범위 컨트롤 바.', icon: 'icon-filter' },
  { id: 'toast', name: 'Toast / Alert', desc: '알림 메시지. Info, Success, Warning, Error.', icon: 'icon-bell' },
  { id: 'modal', name: 'Modal', desc: '다이얼로그. 확인, 폼 입력용.', icon: 'icon-maximize-2' },
  { id: 'empty-state', name: 'Empty State', desc: '데이터 없음 상태 표시.', icon: 'icon-inbox' },
  { id: 'tabs', name: 'Tabs', desc: '탭 전환 인터페이스.', icon: 'icon-columns' },
  { id: 'pagination', name: 'Pagination', desc: '테이블 페이지 네비게이션.', icon: 'icon-more-horizontal' },
  { id: 'checkbox-radio', name: 'Checkbox & Radio', desc: '선택 컨트롤. 단일, 그룹, 가로 배치.', icon: 'icon-check-square' },
  { id: 'toggle', name: 'Toggle / Switch', desc: 'On/Off 토글 스위치.', icon: 'icon-toggle-left' },
  { id: 'textarea', name: 'Textarea', desc: '멀티라인 텍스트 입력.', icon: 'icon-align-left' },
  { id: 'tooltip', name: 'Tooltip', desc: '호버 시 추가 정보 표시.', icon: 'icon-message-square' },
  { id: 'progress', name: 'Progress & Spinner', desc: '로딩 상태, 진행률 표시.', icon: 'icon-loader' },
  { id: 'breadcrumb', name: 'Breadcrumb', desc: '페이지 경로 네비게이션.', icon: 'icon-chevrons-right' },
  { id: 'avatar', name: 'Avatar', desc: '사용자/장비 프로필 아이콘.', icon: 'icon-user' },
  { id: 'dropdown', name: 'Dropdown Menu', desc: '액션 드롭다운 메뉴.', icon: 'icon-chevron-down' },
  { id: 'skeleton', name: 'Skeleton', desc: '로딩 플레이스홀더 애니메이션.', icon: 'icon-image' },
];

export default function ComponentsIndex() {
  return (
    <>
      <div className="doc-page-head">
        <h1 className="doc-page-title">Components</h1>
        <p className="doc-page-desc">
          hl-system.css에 정의된 {components.length}개 컴포넌트.
          각 컴포넌트를 클릭하면 상세 가이드를 확인할 수 있습니다.
        </p>
      </div>
      <div className="doc-landing-grid">
        {components.map((c) => (
          <Link key={c.id} to={`/components/${c.id}`} className="doc-landing-card">
            <div className="doc-landing-card__icon"><i className={c.icon} /></div>
            <div className="doc-landing-card__title">{c.name}</div>
            <div className="doc-landing-card__desc">{c.desc}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
