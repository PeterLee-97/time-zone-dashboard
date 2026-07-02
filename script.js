const zones = [
  { tz: 'Asia/Seoul', labels: { ko: '대한민국 · 서울', en: 'Korea · Seoul', zh: '韩国 · 首尔' } },
  { tz: 'America/New_York', labels: { ko: '미국 · 뉴욕', en: 'United States · New York', zh: '美国 · 纽约' } },
  { tz: 'America/Los_Angeles', labels: { ko: '미국 · 로스앤젤레스', en: 'United States · Los Angeles', zh: '美国 · 洛杉矶' } },
  { tz: 'America/Chicago', labels: { ko: '미국 · 시카고', en: 'United States · Chicago', zh: '美国 · 芝加哥' } },
  { tz: 'America/Toronto', labels: { ko: '캐나다 · 토론토', en: 'Canada · Toronto', zh: '加拿大 · 多伦多' } },
  { tz: 'Europe/London', labels: { ko: '영국 · 런던', en: 'United Kingdom · London', zh: '英国 · 伦敦' } },
  { tz: 'Europe/Paris', labels: { ko: '프랑스 · 파리', en: 'France · Paris', zh: '法国 · 巴黎' } },
  { tz: 'Europe/Berlin', labels: { ko: '독일 · 베를린', en: 'Germany · Berlin', zh: '德国 · 柏林' } },
  { tz: 'Asia/Shanghai', labels: { ko: '중국 · 상하이/베이징', en: 'China · Shanghai/Beijing', zh: '中国 · 上海/北京' } },
  { tz: 'Asia/Tokyo', labels: { ko: '일본 · 도쿄', en: 'Japan · Tokyo', zh: '日本 · 东京' } },
  { tz: 'Asia/Singapore', labels: { ko: '싱가포르', en: 'Singapore', zh: '新加坡' } },
  { tz: 'Asia/Taipei', labels: { ko: '대만 · 타이베이', en: 'Taiwan · Taipei', zh: '台湾 · 台北' } },
  { tz: 'Asia/Hong_Kong', labels: { ko: '홍콩', en: 'Hong Kong', zh: '香港' } },
  { tz: 'Asia/Bangkok', labels: { ko: '태국 · 방콕', en: 'Thailand · Bangkok', zh: '泰国 · 曼谷' } },
  { tz: 'Asia/Dubai', labels: { ko: 'UAE · 두바이', en: 'UAE · Dubai', zh: '阿联酋 · 迪拜' } },
  { tz: 'Australia/Sydney', labels: { ko: '호주 · 시드니', en: 'Australia · Sydney', zh: '澳大利亚 · 悉尼' } },
  { tz: 'Pacific/Auckland', labels: { ko: '뉴질랜드 · 오클랜드', en: 'New Zealand · Auckland', zh: '新西兰 · 奥克兰' } },
  { tz: 'America/Sao_Paulo', labels: { ko: '브라질 · 상파울루', en: 'Brazil · São Paulo', zh: '巴西 · 圣保罗' } }
];

const i18n = {
  ko: {
    swap: '서로 바꾸기', eyebrow: 'TIME ZONE CONVERTER', title: '내 가능 시간을 넣으면 상대방 시간이 바로 보입니다.',
    mainKicker: 'Quick Convert', mainTitle: '가능 시간 입력', today: '오늘', myZone: '내 시간대', theirZone: '상대 시간대',
    date: '날짜', from: '시작', to: '종료', yourAvailableTime: '내 가능 시간', theirLocalTime: '상대방 현지 시간', timeDiff: '시차', now: '지금',
    ahead: '{hours}시간 빠름', behind: '{hours}시간 느림', sameTime: '같은 시간대',
    timelineKicker: 'Visual Timeline', timelineTitle: '24시간 타임라인', timelineDesc: '색칠된 구간이 내가 입력한 가능 시간입니다.', homeTimeline: '내 시간', targetTimeline: '상대 시간'
  },
  en: {
    swap: 'Swap', eyebrow: 'TIME ZONE CONVERTER', title: 'Enter your free time. See theirs instantly.',
    mainKicker: 'Quick Convert', mainTitle: 'Availability', today: 'Today', myZone: 'My time zone', theirZone: 'Their time zone',
    date: 'Date', from: 'From', to: 'To', yourAvailableTime: 'Your free time', theirLocalTime: 'Their local time', timeDiff: 'Difference', now: 'Now',
    ahead: '{hours}h ahead', behind: '{hours}h behind', sameTime: 'Same zone',
    timelineKicker: 'Visual Timeline', timelineTitle: '24-hour timeline', timelineDesc: 'The highlighted block is your available window.', homeTimeline: 'My time', targetTimeline: 'Their time'
  },
  zh: {
    swap: '互换', eyebrow: 'TIME ZONE CONVERTER', title: '输入你的可用时间，马上看到对方时间。',
    mainKicker: 'Quick Convert', mainTitle: '可用时间', today: '今天', myZone: '我的时区', theirZone: '对方时区',
    date: '日期', from: '开始', to: '结束', yourAvailableTime: '我的可用时间', theirLocalTime: '对方当地时间', timeDiff: '时差', now: '现在',
    ahead: '快 {hours} 小时', behind: '慢 {hours} 小时', sameTime: '同一时区',
    timelineKicker: 'Visual Timeline', timelineTitle: '24小时轴', timelineDesc: '高亮区间是你输入的可用时间。', homeTimeline: '我的时间', targetTimeline: '对方时间'
  }
};

const $ = (id) => document.getElementById(id);
const state = { lang: 'ko' };

function labelFor(tz) {
  return zones.find((z) => z.tz === tz)?.labels[state.lang] || tz;
}

function populateZones() {
  const home = $('homeZone');
  const target = $('targetZone');
  const previousHome = home.value || 'Asia/Seoul';
  const previousTarget = target.value || 'America/New_York';
  const options = zones.map((z) => `<option value="${z.tz}">${z.labels[state.lang]} · ${z.tz}</option>`).join('');
  home.innerHTML = options;
  target.innerHTML = options;
  home.value = previousHome;
  target.value = previousTarget;
}

function translate() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[state.lang][key]) el.textContent = i18n[state.lang][key];
  });
  populateZones();
  updateAll();
}

function partsInZone(date, timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone, hour12: false, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  }).formatToParts(date).reduce((acc, p) => {
    if (p.type !== 'literal') acc[p.type] = p.value;
    return acc;
  }, {});
  if (parts.hour === '24') parts.hour = '00';
  return parts;
}

function offsetMinutes(date, timeZone) {
  const p = partsInZone(date, timeZone);
  const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
  return (asUTC - date.getTime()) / 60000;
}

function zonedTimeToDate(dateString, timeString, timeZone) {
  const [y, m, d] = dateString.split('-').map(Number);
  const [hh, mm] = timeString.split(':').map(Number);
  const utcGuess = new Date(Date.UTC(y, m - 1, d, hh, mm, 0));
  const offset = offsetMinutes(utcGuess, timeZone);
  return new Date(utcGuess.getTime() - offset * 60000);
}

function locale() {
  return state.lang === 'ko' ? 'ko-KR' : state.lang === 'zh' ? 'zh-CN' : 'en-US';
}

function fmt(date, timeZone, opts) {
  return new Intl.DateTimeFormat(locale(), { timeZone, ...opts }).format(date);
}

function formatWindow(start, end, timeZone) {
  const startDate = fmt(start, timeZone, { month: 'short', day: 'numeric', weekday: 'short' });
  const endDate = fmt(end, timeZone, { month: 'short', day: 'numeric', weekday: 'short' });
  const startTime = fmt(start, timeZone, { hour: '2-digit', minute: '2-digit', hour12: false });
  const endTime = fmt(end, timeZone, { hour: '2-digit', minute: '2-digit', hour12: false });
  return startDate === endDate ? `${startDate}\n${startTime}–${endTime}` : `${startDate} ${startTime}\n→ ${endDate} ${endTime}`;
}

function setToday() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  $('availableDate').value = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

function updateAvailability() {
  const date = $('availableDate').value;
  const start = $('availableStart').value;
  const end = $('availableEnd').value;
  if (!date || !start || !end) return;

  const home = $('homeZone').value;
  const target = $('targetZone').value;
  const startDate = zonedTimeToDate(date, start, home);
  let endDate = zonedTimeToDate(date, end, home);
  if (endDate <= startDate) endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);

  $('homeWindow').textContent = formatWindow(startDate, endDate, home);
  $('targetWindow').textContent = formatWindow(startDate, endDate, target);
  $('homeLabel').textContent = labelFor(home);
  $('targetLabel').textContent = labelFor(target);
  updateTimeline(date, start, end, home, target);
}

function minutesFromTime(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function makeTimelineTrack(startMin, endMin) {
  const ticks = Array.from({ length: 25 }, (_, hour) => `<i style="left:${(hour / 24) * 100}%"></i>`).join('');
  let normalizedEnd = endMin <= startMin ? endMin + 1440 : endMin;
  const ranges = [];
  if (normalizedEnd <= 1440) {
    ranges.push([startMin, normalizedEnd]);
  } else {
    ranges.push([startMin, 1440], [0, normalizedEnd - 1440]);
  }
  const blocks = ranges.map(([a, b]) => {
    const left = (a / 1440) * 100;
    const width = Math.max(((b - a) / 1440) * 100, 0.6);
    return `<b class="timeline-window" style="left:${left}%;width:${width}%"></b>`;
  }).join('');
  return `${ticks}${blocks}`;
}

function updateTimeline(date, start, end, home, target) {
  const startMin = minutesFromTime(start);
  const endMin = minutesFromTime(end);
  const homeTrack = $('homeTimelineTrack');
  const targetTrack = $('targetTimelineTrack');
  if (!homeTrack || !targetTrack) return;

  homeTrack.innerHTML = makeTimelineTrack(startMin, endMin);
  targetTrack.innerHTML = makeTimelineTrack(startMin, endMin);
  $('timelineHomeZone').textContent = labelFor(home);
  $('timelineTargetZone').textContent = labelFor(target);

  const targetLabels = [0, 6, 12, 18, 24].map((hour) => {
    const hh = String(hour % 24).padStart(2, '0');
    let instant = zonedTimeToDate(date, `${hh}:00`, home);
    if (hour === 24) instant = new Date(instant.getTime() + 24 * 60 * 60 * 1000);
    const label = fmt(instant, target, { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
    return `<span>${label}</span>`;
  }).join('');
  $('targetTimelineLabels').innerHTML = targetLabels;
}

function updateClocks() {
  const now = new Date();
  const home = $('homeZone').value;
  const target = $('targetZone').value;
  $('homeClock').textContent = `${labelFor(home)} ${fmt(now, home, { hour: '2-digit', minute: '2-digit', hour12: false })}`;
  $('targetClock').textContent = `${labelFor(target)} ${fmt(now, target, { hour: '2-digit', minute: '2-digit', hour12: false })}`;

  const diff = (offsetMinutes(now, target) - offsetMinutes(now, home)) / 60;
  const abs = Math.abs(diff);
  const hours = Number.isInteger(abs) ? abs : abs.toFixed(1);
  const t = i18n[state.lang];
  $('diffText').textContent = diff === 0 ? t.sameTime : (diff > 0 ? t.ahead : t.behind).replace('{hours}', hours);
}

function updateAll() {
  updateAvailability();
  updateClocks();
}

function bindEvents() {
  $('languageSelect').addEventListener('change', (e) => { state.lang = e.target.value; translate(); });
  ['homeZone', 'targetZone', 'availableDate', 'availableStart', 'availableEnd'].forEach((id) => {
    $(id).addEventListener('input', updateAll);
    $(id).addEventListener('change', updateAll);
  });
  $('swapBtn').addEventListener('click', () => {
    const current = $('homeZone').value;
    $('homeZone').value = $('targetZone').value;
    $('targetZone').value = current;
    updateAll();
  });
  $('setTodayBtn').addEventListener('click', () => { setToday(); updateAll(); });
  document.querySelectorAll('[data-preset-home]').forEach((btn) => {
    btn.addEventListener('click', () => {
      $('homeZone').value = btn.dataset.presetHome;
      $('targetZone').value = btn.dataset.presetTarget;
      updateAll();
    });
  });
}

populateZones();
setToday();
bindEvents();
translate();
setInterval(updateClocks, 1000);
