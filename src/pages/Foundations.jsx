export default function Foundations() {
  return (
    <>
      {/* Page Header */}
      <div className="doc-page-head">
        <div className="doc-page-title">Foundations</div>
        <div className="doc-page-desc">
          HL Design System의 시각적 기반을 구성하는 디자인 토큰입니다. 색상, 타이포그래피, 간격, 그림자, 모서리 등 모든 UI는 이 토큰을 기반으로 구성됩니다.
        </div>
      </div>

      {/* ========== 1. 색상 (Colors) ========== */}
      <div className="doc-section" id="colors">
        <div className="doc-section-title">색상 (Colors)</div>
        <div className="doc-section-desc">
          HL 브랜드 아이덴티티와 운영 도구 의미 체계를 담은 색상 팔레트입니다. 모든 색상은 CSS 변수로 제공됩니다.
        </div>

        {/* Primary */}
        <div className="doc-sub">
          <div className="doc-sub-title">Primary</div>
          <div className="doc-color-row">
            <div className="doc-color-swatch" style={{ backgroundColor: '#eef8fc', color: '#005474' }}><b>50</b>#eef8fc</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#d5eef9', color: '#005474' }}><b>100</b>#d5eef9</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#a8ddf3', color: '#005474' }}><b>200</b>#a8ddf3</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#6bc5ea', color: '#005474' }}><b>300</b>#6bc5ea</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#30ade0', color: '#002B68' }}><b>400</b>#30ade0</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00B4ED', color: '#002B68' }}><b>500</b>#00B4ED</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#0095c8', color: '#fff' }}><b>600</b>#0095c8</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#00729a', color: '#fff' }}><b>700</b>#00729a</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#005474', color: '#fff' }}><b>800</b>#005474</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#002B68', color: '#fff' }}><b>900</b>#002B68</div>
          </div>
        </div>

        {/* Neutral */}
        <div className="doc-sub">
          <div className="doc-sub-title">Neutral</div>
          <div className="doc-color-row">
            <div className="doc-color-swatch" style={{ backgroundColor: '#f7f8fa', color: '#282d36' }}><b>50</b>#f7f8fa</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#f0f1f4', color: '#282d36' }}><b>100</b>#f0f1f4</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#e8eaee', color: '#282d36' }}><b>150</b>#e8eaee</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#dcdfe4', color: '#282d36' }}><b>200</b>#dcdfe4</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#c4c8cf', color: '#282d36' }}><b>300</b>#c4c8cf</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#9da3ad', color: '#282d36' }}><b>400</b>#9da3ad</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#6e7582', color: '#fff' }}><b>500</b>#6e7582</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#555c68', color: '#fff' }}><b>600</b>#555c68</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#3d434e', color: '#fff' }}><b>700</b>#3d434e</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#282d36', color: '#fff' }}><b>800</b>#282d36</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#181b22', color: '#fff' }}><b>900</b>#181b22</div>
            <div className="doc-color-swatch" style={{ backgroundColor: '#0e1016', color: '#fff' }}><b>950</b>#0e1016</div>
          </div>
        </div>

        {/* 시맨틱 */}
        <div className="doc-sub">
          <div className="doc-sub-title">시맨틱</div>
          <div className="doc-color-blocks">
            <div className="doc-color-block">
              <div className="doc-color-block__swatch" style={{ backgroundColor: '#e8f5ee' }} />
              <div className="doc-color-block__info">
                <b>Success</b>
                <span>#18864b</span>
              </div>
            </div>
            <div className="doc-color-block">
              <div className="doc-color-block__swatch" style={{ backgroundColor: '#fdf6e3' }} />
              <div className="doc-color-block__info">
                <b>Warning</b>
                <span>#b88b17</span>
              </div>
            </div>
            <div className="doc-color-block">
              <div className="doc-color-block__swatch" style={{ backgroundColor: '#fce8e8' }} />
              <div className="doc-color-block__info">
                <b>Error</b>
                <span>#c9302c</span>
              </div>
            </div>
            <div className="doc-color-block">
              <div className="doc-color-block__swatch" style={{ backgroundColor: '#eef8fc' }} />
              <div className="doc-color-block__info">
                <b>Info</b>
                <span>#0095c8</span>
              </div>
            </div>
          </div>
        </div>

        {/* 의미 테이블 */}
        <div className="doc-sub">
          <div className="doc-sub-title">의미 테이블</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>색상</th>
                <th>토큰</th>
                <th>의미</th>
                <th>사용 예</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="doc-token-swatch" style={{ backgroundColor: '#18864b' }} /></td>
                <td className="doc-token-name">--hl-success</td>
                <td>정상 / 완료 / 가동</td>
                <td>장비 상태 뱃지, 정상 수치</td>
              </tr>
              <tr>
                <td><span className="doc-token-swatch" style={{ backgroundColor: '#b88b17' }} /></td>
                <td className="doc-token-name">--hl-warning</td>
                <td>경고 / 주의</td>
                <td>임계치 초과, 점검 필요 알림</td>
              </tr>
              <tr>
                <td><span className="doc-token-swatch" style={{ backgroundColor: '#c9302c' }} /></td>
                <td className="doc-token-name">--hl-error</td>
                <td>에러 / 위험 / 정지</td>
                <td>장비 고장, 긴급 알림</td>
              </tr>
              <tr>
                <td><span className="doc-token-swatch" style={{ backgroundColor: '#0095c8' }} /></td>
                <td className="doc-token-name">--hl-info</td>
                <td>정보 / 안내</td>
                <td>일반 공지, 도움말 메시지</td>
              </tr>
              <tr>
                <td><span className="doc-token-swatch" style={{ backgroundColor: '#002B68' }} /></td>
                <td className="doc-token-name">--hl-primary-900</td>
                <td>브랜드 / 강조</td>
                <td>CTA 버튼, 활성 탭, 선택 항목</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 2. 타이포그래피 ========== */}
      <div className="doc-section" id="typography">
        <div className="doc-section-title">타이포그래피 (Typography)</div>
        <div className="doc-section-desc">일관된 텍스트 계층 구조를 위한 타입 스케일과 웨이트입니다.</div>

        {/* Type Scale */}
        <div className="doc-sub">
          <div className="doc-sub-title">Type Scale</div>

          <div className="doc-typo">
            <div className="doc-typo__meta"><b>3xl</b>36px / 2.25rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-3xl)', fontWeight: 700 }}>대시보드 타이틀</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>2xl</b>28px / 1.75rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-2xl)', fontWeight: 700 }}>섹션 제목</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>xl</b>22px / 1.375rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-xl)', fontWeight: 600 }}>카드 헤더</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>lg</b>18px / 1.125rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-lg)', fontWeight: 600 }}>페이지 소제목</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>md</b>16px / 1rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-md)' }}>본문 텍스트</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>base</b>14px / 0.875rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-base)' }}>기본 UI 텍스트</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>sm</b>13px / 0.8125rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-sm)' }}>테이블 셀, 보조 설명</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>xs</b>11px / 0.6875rem</div>
            <div className="doc-typo__sample" style={{ fontSize: 'var(--hl-text-xs)' }}>라벨, 캡션, 뱃지 텍스트</div>
          </div>
          <div className="doc-typo">
            <div className="doc-typo__meta"><b>mono</b>Geist Mono</div>
            <div className="doc-typo__sample" style={{ fontFamily: 'var(--hl-mono)', fontSize: 'var(--hl-text-sm)' }}>0123456789 ABCDEF --hl-primary-700</div>
          </div>
        </div>

        {/* Weight */}
        <div className="doc-sub">
          <div className="doc-sub-title">Weight</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>Weight</th>
                <th>값</th>
                <th>용도</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="doc-token-name">Regular</td>
                <td className="doc-token-val">400</td>
                <td>본문, 설명</td>
                <td>테이블 셀, 보조 텍스트</td>
              </tr>
              <tr>
                <td className="doc-token-name">Medium</td>
                <td className="doc-token-val">500</td>
                <td>라벨, 필드명</td>
                <td>입력 라벨, 네비게이션 링크</td>
              </tr>
              <tr>
                <td className="doc-token-name">Semibold</td>
                <td className="doc-token-val">600</td>
                <td>카드 제목, 소제목</td>
                <td>카드 헤더, 섹션 타이틀</td>
              </tr>
              <tr>
                <td className="doc-token-name">Bold</td>
                <td className="doc-token-val">700</td>
                <td>페이지 타이틀, KPI 수치</td>
                <td>Hero 타이틀, 대시보드 숫자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 3. 간격 ========== */}
      <div className="doc-section" id="spacing">
        <div className="doc-section-title">간격 (Spacing)</div>
        <div className="doc-section-desc">4px 기반의 간격 스케일입니다. 모든 여백과 패딩은 이 토큰을 사용합니다.</div>

        <div className="doc-sub">
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-1</div>
            <div className="doc-spacing__bar" style={{ width: 12 }} />
            <div className="doc-spacing__val">4px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-2</div>
            <div className="doc-spacing__bar" style={{ width: 24 }} />
            <div className="doc-spacing__val">8px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-3</div>
            <div className="doc-spacing__bar" style={{ width: 36 }} />
            <div className="doc-spacing__val">12px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-4</div>
            <div className="doc-spacing__bar" style={{ width: 48 }} />
            <div className="doc-spacing__val">16px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-5</div>
            <div className="doc-spacing__bar" style={{ width: 60 }} />
            <div className="doc-spacing__val">20px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-6</div>
            <div className="doc-spacing__bar" style={{ width: 72 }} />
            <div className="doc-spacing__val">24px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-8</div>
            <div className="doc-spacing__bar" style={{ width: 96 }} />
            <div className="doc-spacing__val">32px</div>
          </div>
          <div className="doc-spacing">
            <div className="doc-spacing__label">sp-12</div>
            <div className="doc-spacing__bar" style={{ width: 144 }} />
            <div className="doc-spacing__val">48px</div>
          </div>
        </div>

        {/* Density */}
        <div className="doc-sub">
          <div className="doc-sub-title">Density</div>
          <table className="doc-token-table">
            <thead>
              <tr>
                <th>요소</th>
                <th>토큰</th>
                <th>권장 값</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>테이블 row 높이</td>
                <td className="doc-token-name">--hl-sp-10</td>
                <td className="doc-token-val">40px</td>
                <td>Compact density 기본값</td>
              </tr>
              <tr>
                <td>카드 패딩</td>
                <td className="doc-token-name">--hl-sp-4</td>
                <td className="doc-token-val">16px</td>
                <td>카드 내부 여백</td>
              </tr>
              <tr>
                <td>카드 간격</td>
                <td className="doc-token-name">--hl-sp-3</td>
                <td className="doc-token-val">12px</td>
                <td>그리드 gap</td>
              </tr>
              <tr>
                <td>섹션 간격</td>
                <td className="doc-token-name">--hl-sp-5</td>
                <td className="doc-token-val">20px</td>
                <td>영역 간 여백</td>
              </tr>
              <tr>
                <td>인라인 gap</td>
                <td className="doc-token-name">--hl-sp-2</td>
                <td className="doc-token-val">8px</td>
                <td>버튼/뱃지 내부 간격</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ========== 4. 그림자 & 모서리 ========== */}
      <div className="doc-section" id="shadows">
        <div className="doc-section-title">그림자 & 모서리 (Shadows & Radius)</div>
        <div className="doc-section-desc">깊이감과 요소 구분을 위한 그림자와 모서리 반경 토큰입니다.</div>

        {/* Shadows */}
        <div className="doc-sub">
          <div className="doc-sub-title">Shadows</div>
          <div className="hl-flex hl-gap-4 hl-flex-wrap hl-mb-6">
            <div className="doc-shadow-item" style={{ boxShadow: 'var(--hl-shadow-1)' }}>shadow-1</div>
            <div className="doc-shadow-item" style={{ boxShadow: 'var(--hl-shadow-2)' }}>shadow-2</div>
            <div className="doc-shadow-item" style={{ boxShadow: 'var(--hl-shadow-3)' }}>shadow-3</div>
            <div className="doc-shadow-item" style={{ boxShadow: 'var(--hl-shadow-4)' }}>shadow-4</div>
          </div>
        </div>

        {/* Radius */}
        <div className="doc-sub">
          <div className="doc-sub-title">Radius</div>
          <div className="hl-flex hl-gap-4 hl-flex-wrap">
            <div className="doc-radius-item" style={{ borderRadius: 'var(--hl-radius-sm)' }}>sm 4px</div>
            <div className="doc-radius-item" style={{ borderRadius: 'var(--hl-radius)' }}>8px</div>
            <div className="doc-radius-item" style={{ borderRadius: 'var(--hl-radius-lg)' }}>lg 12px</div>
            <div className="doc-radius-item" style={{ borderRadius: 'var(--hl-radius-xl)' }}>xl 16px</div>
            <div className="doc-radius-item" style={{ borderRadius: 'var(--hl-radius-full)', width: 100 }}>full</div>
          </div>
        </div>
      </div>
    </>
  );
}
