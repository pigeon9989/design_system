# HL Design System

사내 AI 도구(Claude Code 등)로 만드는 내부 운영 도구 UI의 디자인 통일을 위한 디자인 시스템입니다.
이 시스템을 프로젝트에 연결하면, AI가 자동으로 일관된 스타일과 구조로 UI를 생성합니다.

---

## 파일 구조

```
hl-design-system/
├── CLAUDE.md                  ← AI용: 핵심 지시문 (모든 문서의 진입점)
├── README.md                  ← 지금 보고 있는 문서
├── tokens/
│   ├── design-tokens.css      ← CSS 변수 (색상, 폰트, 간격, 다크모드)
│   └── tailwind.preset.js     ← Tailwind CSS 프리셋
├── docs/
│   ├── STYLE_GUIDE.md         ← 스타일 규칙 (Do / Don't)
│   ├── DATA_DISPLAY.md        ← 데이터 표현 원칙 (레이아웃, KPI, 밀도)
│   └── COMPONENTS.md          ← 13개 컴포넌트 패턴 (CSS + Tailwind)
└── examples/
    ├── GOOD_EXAMPLES.md       ← 4개 도메인별 좋은 예시
    └── BAD_EXAMPLES.md        ← 8개 흔한 실수와 수정 방법
```

---

## 빠른 시작

### 방법 1: Git Submodule (권장)

프로젝트에 서브모듈로 추가합니다:

```bash
cd your-project
git submodule add https://github.com/pigeon9989/design_system.git design-system
```

프로젝트 루트의 `CLAUDE.md`에 한 줄을 추가합니다:

```markdown
UI 작업 시 반드시 `design-system/CLAUDE.md`를 먼저 읽고 따를 것.
```

이것만으로 Claude Code가 자동으로 디자인 시스템을 참조합니다.

### 방법 2: 폴더 복사 (간편)

이 저장소의 전체 폴더를 프로젝트 안에 복사합니다:

```bash
cp -r hl-design-system/ your-project/design-system/
```

### 방법 3: 직접 프롬프트 (일회성)

Claude Code에서 직접 참조를 요청합니다:

```
@design-system/CLAUDE.md 읽고 따라서 작업해줘
```

---

## 사용법

### CSS 변수 방식 (모든 프로젝트)

HTML 파일에 토큰을 import합니다:

```html
<link rel="stylesheet" href="design-system/tokens/design-tokens.css" />
```

CSS에서 변수를 사용합니다:

```css
.my-button {
  background: var(--color-primary-600);
  color: var(--text-inverse);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-family: var(--font-sans);
}
```

### Tailwind CSS 방식

`tailwind.config.js`에 프리셋을 추가합니다:

```javascript
module.exports = {
  presets: [require('./design-system/tokens/tailwind.preset.js')],
  // ... 기존 설정
};
```

Tailwind 클래스에서 프리셋 토큰을 사용합니다:

```jsx
<button className="bg-primary-600 text-white px-4 py-2 rounded-md font-sans">
  저장
</button>
```

---

## HL CI 컬러

이 디자인 시스템은 HL 그룹 CI 컬러를 기반으로 합니다:

| 이름 | 색상 | 코드 | 용도 |
|------|------|------|------|
| HL Sky Blue | 🔵 | `#00B4ED` | Primary 브랜드 컬러 (primary-500) |
| HL Navy | 🔷 | `#002B68` | 어두운 브랜드 액센트 (primary-900) |
| Gold | 🟡 | `#C09A5D` | 액센트 (accent-gold) |
| Silver | ⚪ | `#B2B2B2` | 액센트 (accent-silver) |

---

## 커스터마이징

### 토큰 값 변경

`tokens/design-tokens.css`의 `:root` 블록에서 변수 값을 직접 수정합니다.
변경 시 `tokens/tailwind.preset.js`도 반드시 동기화해야 합니다.

### 규칙 추가

`docs/` 폴더의 마크다운 파일에 프로젝트별 규칙을 추가할 수 있습니다.

### 컴포넌트 추가

`docs/COMPONENTS.md`에 프로젝트별 컴포넌트 패턴을 추가합니다.
CSS 변수 버전과 Tailwind 버전을 모두 작성해 주세요.

---

## 핵심 원칙 요약

- **토큰만 사용** — 하드코딩 색상/간격 금지
- **Filter → Summary → Main → Detail** — 모든 데이터 화면의 구조
- **Compact Density** — 한 화면에 최대 정보
- **다크 모드 필수** — 관제실/야간 환경 지원
- **Table First** — 모든 데이터는 테이블이 기본
