export default function Cctv() {
  return (
    <div className="hl-container hl-stack">

      {/* 1. Filter Bar */}
      <div className="hl-filter">
        <input className="hl-input" type="text" placeholder="카메라 검색..." />
        <select className="hl-input">
          <option>위치 전체</option>
          <option>1층 생산동</option>
          <option>2층 조립동</option>
          <option>외부</option>
        </select>
        <select className="hl-input">
          <option>상태 전체</option>
          <option>온라인</option>
          <option>오프라인</option>
          <option>이벤트</option>
        </select>
        <select className="hl-input">
          <option>2x2</option>
          <option>3x3</option>
        </select>
        <button className="hl-btn hl-btn--primary hl-btn--sm">적용</button>
      </div>

      {/* 2. KPI Row */}
      <div className="hl-kpi-row hl-kpi-row--4">
        <div className="hl-kpi">
          <span className="hl-kpi__label">전체 카메라</span>
          <span className="hl-kpi__value">24<span className="hl-kpi__unit">대</span></span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">온라인</span>
          <span className="hl-kpi__value">22<span className="hl-kpi__unit">대</span></span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">오프라인</span>
          <span className="hl-kpi__value">2<span className="hl-kpi__unit">대</span></span>
        </div>
        <div className="hl-kpi">
          <span className="hl-kpi__label">금일 이벤트</span>
          <span className="hl-kpi__value">15<span className="hl-kpi__unit">건</span></span>
        </div>
      </div>

      {/* 3. Video Grid (2x2) */}
      <div className="hl-grid hl-grid--2">
        <div className="hl-video-cell">
          <div className="hl-video-cell__tag"><span className="hl-badge hl-badge--success">LIVE</span></div>
          <div className="hl-video-cell__icon"><i className="icon-video"></i></div>
          CAM-01 · 1층 생산동 입구
        </div>
        <div className="hl-video-cell">
          <div className="hl-video-cell__tag"><span className="hl-badge hl-badge--success">LIVE</span></div>
          <div className="hl-video-cell__icon"><i className="icon-video"></i></div>
          CAM-02 · 2층 조립동 A구역
        </div>
        <div className="hl-video-cell">
          <div className="hl-video-cell__tag"><span className="hl-badge hl-badge--warning">이벤트</span></div>
          <div className="hl-video-cell__icon"><i className="icon-video"></i></div>
          CAM-03 · 외부 주차장
        </div>
        <div className="hl-video-cell hl-video-cell--off">
          <div className="hl-video-cell__tag"><span className="hl-badge hl-badge--error">오프라인</span></div>
          <div className="hl-video-cell__icon"><i className="icon-video"></i></div>
          CAM-04 · 1층 생산동 후면
        </div>
      </div>

      {/* 4. Two Tables Side by Side */}
      <div className="hl-grid hl-grid--2">
        {/* Left: Camera Status */}
        <div className="hl-card">
          <div className="hl-card__head">카메라 상태</div>
          <div className="hl-card__body hl-card__body--flush">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>위치</th>
                  <th>상태</th>
                  <th>해상도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">CAM-01</td>
                  <td>1층 생산동 입구</td>
                  <td><span className="hl-badge hl-badge--success">온라인</span></td>
                  <td className="mono">1080p</td>
                </tr>
                <tr>
                  <td className="mono">CAM-02</td>
                  <td>2층 조립동 A구역</td>
                  <td><span className="hl-badge hl-badge--success">온라인</span></td>
                  <td className="mono">4K</td>
                </tr>
                <tr>
                  <td className="mono">CAM-03</td>
                  <td>외부 주차장</td>
                  <td><span className="hl-badge hl-badge--warning">이벤트</span></td>
                  <td className="mono">1080p</td>
                </tr>
                <tr>
                  <td className="mono">CAM-04</td>
                  <td>1층 생산동 후면</td>
                  <td><span className="hl-badge hl-badge--error">오프라인</span></td>
                  <td className="mono">1080p</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Detection Events */}
        <div className="hl-card">
          <div className="hl-card__head">감지 이벤트</div>
          <div className="hl-card__body hl-card__body--flush">
            <table className="hl-table">
              <thead>
                <tr>
                  <th>시간</th>
                  <th>카메라</th>
                  <th>이벤트</th>
                  <th>신뢰도</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">14:32:10</td>
                  <td>CAM-03</td>
                  <td>움직임 감지</td>
                  <td className="mono">94.2%</td>
                </tr>
                <tr>
                  <td className="mono">14:15:45</td>
                  <td>CAM-01</td>
                  <td>안전모 미착용</td>
                  <td className="mono">87.6%</td>
                </tr>
                <tr>
                  <td className="mono">13:58:22</td>
                  <td>CAM-02</td>
                  <td>구역 침입</td>
                  <td className="mono">91.3%</td>
                </tr>
                <tr>
                  <td className="mono">13:42:08</td>
                  <td>CAM-03</td>
                  <td>차량 진입</td>
                  <td className="mono">96.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
