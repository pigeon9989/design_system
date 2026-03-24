export default function Monitoring() {
  return (
    <div className="hl-container hl-stack">

      {/* 1. Filter Bar */}
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder="장비 검색..." />
        <select className="hl-input">
          <option>유형 전체</option>
          <option>CNC</option>
          <option>로봇암</option>
          <option>컨베이어</option>
          <option>프레스</option>
        </select>
        <select className="hl-input">
          <option>상태 전체</option>
          <option>가동</option>
          <option>점검</option>
          <option>정지</option>
        </select>
        <button className="hl-btn hl-btn--primary hl-btn--sm">적용</button>
        <button className="hl-btn hl-btn--ghost hl-btn--sm">초기화</button>
      </div>

      {/* 2. KPI Row */}
      <div className="hl-kpi-row hl-kpi-row--4">
        <div className="hl-kpi">
          <span className="hl-kpi__label">총장비</span>
          <span className="hl-kpi__value">48<span className="hl-kpi__unit">대</span></span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">가동중</span>
          <span className="hl-kpi__value">42<span className="hl-kpi__unit">대</span></span>
          <span className="hl-kpi__trend hl-kpi__trend--up"><i className="icon-trending-up"></i> ↑87.5%</span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">점검중</span>
          <span className="hl-kpi__value">4<span className="hl-kpi__unit">대</span></span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">정지</span>
          <span className="hl-kpi__value">2<span className="hl-kpi__unit">대</span></span>
        </div>
      </div>

      {/* 3. Equipment Grid */}
      <div className="hl-grid hl-grid--auto">
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-bot"></i></div>
          <div className="hl-equip-card__name">CNC-001</div>
          <span className="hl-badge hl-badge--success">가동</span>
          <div className="hl-equip-card__meta">가동시간 12h · 온도 42°C</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-cpu"></i></div>
          <div className="hl-equip-card__name">로봇암-A02</div>
          <span className="hl-badge hl-badge--success">가동</span>
          <div className="hl-equip-card__meta">가동시간 8h · 온도 38°C</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-settings"></i></div>
          <div className="hl-equip-card__name">컨베이어-03</div>
          <span className="hl-badge hl-badge--warning">점검</span>
          <div className="hl-equip-card__meta">점검 예정 · 벨트 교체</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-wrench"></i></div>
          <div className="hl-equip-card__name">프레스-B01</div>
          <span className="hl-badge hl-badge--success">가동</span>
          <div className="hl-equip-card__meta">가동시간 10h · 압력 정상</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-monitor"></i></div>
          <div className="hl-equip-card__name">CNC-004</div>
          <span className="hl-badge hl-badge--success">가동</span>
          <div className="hl-equip-card__meta">가동시간 6h · 온도 40°C</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-cpu"></i></div>
          <div className="hl-equip-card__name">로봇암-C03</div>
          <span className="hl-badge hl-badge--error">정지</span>
          <div className="hl-equip-card__meta">오류 코드 E-4021</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-zap"></i></div>
          <div className="hl-equip-card__name">프레스-A02</div>
          <span className="hl-badge hl-badge--success">가동</span>
          <div className="hl-equip-card__meta">가동시간 9h · 압력 정상</div>
        </div>
        <div className="hl-equip-card">
          <div className="hl-equip-card__icon"><i className="icon-settings"></i></div>
          <div className="hl-equip-card__name">컨베이어-07</div>
          <span className="hl-badge hl-badge--warning">점검</span>
          <div className="hl-equip-card__meta">정기 점검 진행중</div>
        </div>
      </div>

      {/* 4. Event Log Table */}
      <div className="hl-card">
        <div className="hl-card__head">최근 이벤트 로그</div>
        <div className="hl-card__body hl-card__body--flush">
          <table className="hl-table">
            <thead>
              <tr>
                <th>시간</th>
                <th>장비</th>
                <th>유형</th>
                <th>이벤트 내용</th>
                <th>심각도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono">14:32:10</td>
                <td>로봇암-C03</td>
                <td>오류</td>
                <td>모터 과부하 감지 — 자동 정지</td>
                <td><span className="hl-badge hl-badge--error">위험</span></td>
              </tr>
              <tr>
                <td className="mono">14:15:45</td>
                <td>컨베이어-03</td>
                <td>점검</td>
                <td>벨트 장력 이상 — 점검 요청</td>
                <td><span className="hl-badge hl-badge--warning">주의</span></td>
              </tr>
              <tr>
                <td className="mono">13:58:22</td>
                <td>CNC-001</td>
                <td>알림</td>
                <td>공구 교체 주기 도래 (잔여 50회)</td>
                <td><span className="hl-badge hl-badge--info">정보</span></td>
              </tr>
              <tr>
                <td className="mono">13:42:08</td>
                <td>프레스-B01</td>
                <td>알림</td>
                <td>일일 생산 목표 달성 (100%)</td>
                <td><span className="hl-badge hl-badge--success">정상</span></td>
              </tr>
              <tr>
                <td className="mono">13:20:33</td>
                <td>컨베이어-07</td>
                <td>점검</td>
                <td>정기 점검 시작 — 예상 2시간</td>
                <td><span className="hl-badge hl-badge--warning">주의</span></td>
              </tr>
              <tr>
                <td className="mono">12:55:17</td>
                <td>CNC-004</td>
                <td>알림</td>
                <td>온도 센서 임계값 접근 (40°C)</td>
                <td><span className="hl-badge hl-badge--info">정보</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
