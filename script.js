const zones = [
  { tz: 'Asia/Seoul', labels: { ko: '대한민국 · 서울', en: 'Korea · Seoul', zh: '韩国 · 首尔' } },
  { tz: 'America/New_York', labels: { ko: '미국 · 뉴욕', en: 'United States · New York', zh: '美国 · 纽约' } },
  { tz: 'America/Los_Angeles', labels: { ko: '미국 · 로스앤젤레스', en: 'United States · Los Angeles', zh: '美国 · 洛杉矶' } },
  { tz: 'America/Chicago', labels: { ko: '미국 · 시카고', en: 'United States · Chicago', zh: '美国 · 芝加哥' } },
  { tz: 'America/Toronto', labels: { ko: '캐나다 · 토론토', en: 'Canada · Toronto', zh: '加拿大 · 多伦多' } },
  { tz: 'Europe/London', labels: { ko: '영국 · 런던', en: 'United Kingdom · London', zh: '英国 · 伦敦' } },
  { tz: 'Europe/Paris', labels: { ko: '프랑스 · 파리', en: 'France · Paris', zh: '法国 · 巴黎' } },
  { tz: 'Europe/Berlin', labels: { ko: '독일 · 베를린', en: 'Germany · Berlin', zh: '德国 · 柏林' } },
  { tz: 'Europe/Madrid', labels: { ko: '스페인 · 마드리드', en: 'Spain · Madrid', zh: '西班牙 · 马德里' } },
  { tz: 'Asia/Shanghai', labels: { ko: '중국 · 상하이/베이징', en: 'China · Shanghai/Beijing', zh: '中国 · 上海/北京' } },
  { tz: 'Asia/Tokyo', labels: { ko: '일본 · 도쿄', en: 'Japan · Tokyo', zh: '日本 · 东京' } },
  { tz: 'Asia/Singapore', labels: { ko: '싱가포르', en: 'Singapore', zh: '新加坡' } },
  { tz: 'Asia/Taipei', labels: { ko: '대만 · 타이베이', en: 'Taiwan · Taipei', zh: '台湾 · 台北' } },
  { tz: 'Asia/Hong_Kong', labels: { ko: '홍콩', en: 'Hong Kong', zh: '香港' } },
  { tz: 'Asia/Bangkok', labels: { ko: '태국 · 방콕', en: 'Thailand · Bangkok', zh: '泰国 · 曼谷' } },
  { tz: 'Asia/Dubai', labels: { ko: 'UAE · 두바이', en: 'UAE · Dubai', zh: '阿联酋 · 迪拜' } },
  { tz: 'Australia/Sydney', labels: { ko: '호주 · 시드니', en: 'Australia · Sydney', zh: '澳大利亚 · 悉尼' } },
  { tz: 'Pacific/Auckland', labels: { ko: '뉴질랜드 · 오클랜드', en: 'New Zealand · Auckland', zh: '新西兰 · 奥克兰' } },
  { tz: 'America/Sao_Paulo', labels: { ko: '브라질 · 상파울루', en: 'Brazil · São Paulo', zh: '巴西 · 圣保罗' } },
  { tz: 'Africa/Johannesburg', labels: { ko: '남아공 · 요하네스버그', en: 'South Africa · Johannesburg', zh: '南非 · 约翰内斯堡' } }
];

const i18n = {
  ko: {
    swap: '서로 바꾸기', eyebrow: 'Long distance, global work, better timing.',
    title: '내 시간과 상대방 시간을 한눈에 비교하세요.',
    subtitle: '연애, 해외 친구, 글로벌 팀 미팅까지. 내가 가능한 시간을 입력하면 상대 나라에서는 몇 시인지 바로 보여줍니다.',
    liveComparison: '실시간 비교', liveComparisonDesc: '현재 시간이 자동으로 업데이트됩니다.',
    chooseZones: '시간대 선택', chooseZonesDesc: '내 위치와 상대방 위치를 선택하세요.', myZone: '내 시간대', theirZone: '상대 시간대',
    rightNow: '지금 시간', timeDiff: '시차', convertSpecific: '특정 시간 변환', convertSpecificDesc: '내 날짜와 시간을 입력하면 상대방 현지 시간을 계산합니다.',
    myDateTime: '내 날짜/시간', useNow: '지금으로 설정', theirTimeWillBe: '상대방 시간', availability: '가능 시간대',
    availabilityDesc: '내가 가능한 시간을 넣고 상대방에게 몇 시인지 확인하세요.', date: '날짜', from: '시작', to: '종료', youAreFree: '내 가능 시간', theySee: '상대방에게는',
    relationshipUse: '장거리 연애', workUse: '글로벌 업무', friendUse: '해외 친구',
    ahead: '{hours}시간 빠름', behind: '{hours}시간 느림', sameTime: '같은 시간대',
    relationshipTip: '굿나잇 전화 시간을 놓치지 마세요.', workTip: '겹치는 업무 시간을 빠르게 찾으세요.', friendTip: '상대방 새벽 알림을 피하세요.',
    crossesDate: '날짜가 바뀝니다', sameDate: '같은 날짜입니다'
  },
  en: {
    swap: 'Swap zones', eyebrow: 'Long distance, global work, better timing.',
    title: 'Compare time zones at a glance.',
    subtitle: 'For long-distance love, overseas friends, and global teams. Enter your available window and instantly see their local time.',
    liveComparison: 'Live comparison', liveComparisonDesc: 'Current time updates automatically.',
    chooseZones: 'Choose time zones', chooseZonesDesc: 'Select your location and the other person’s location.', myZone: 'My time zone', theirZone: 'Their time zone',
    rightNow: 'Right now', timeDiff: 'Time difference', convertSpecific: 'Convert a specific time', convertSpecificDesc: 'Enter your date and time to calculate their local time.',
    myDateTime: 'My date/time', useNow: 'Use now', theirTimeWillBe: 'Their time', availability: 'Available window',
    availabilityDesc: 'Enter when you are free and see what time it is for them.', date: 'Date', from: 'From', to: 'To', youAreFree: 'You are free', theySee: 'They see',
    relationshipUse: 'Long-distance love', workUse: 'Global work', friendUse: 'Overseas friends',
    ahead: '{hours}h ahead', behind: '{hours}h behind', sameTime: 'Same time zone',
    relationshipTip: 'Never miss the good-night call.', workTip: 'Find overlap hours faster.', friendTip: 'Avoid waking them up at 3 AM.',
    crossesDate: 'Date changes', sameDate: 'Same date'
  },
  zh: {
    swap: '互换时区', eyebrow: 'Long distance, global work, better timing.',
    title: '一眼比较你和对方的时间。',
    subtitle: '适合异地恋、海外朋友和全球团队。输入你方便的时间，马上看到对方当地时间。',
    liveComparison: '实时比较', liveComparisonDesc: '当前时间会自动更新。',
    chooseZones: '选择时区', chooseZonesDesc: '选择你的位置和对方的位置。', myZone: '我的时区', theirZone: '对方时区',
    rightNow: '现在时间', timeDiff: '时差', convertSpecific: '转换指定时间', convertSpecificDesc: '输入你的日期和时间，计算对方当地时间。',
    myDateTime: '我的日期/时间', useNow: '设为现在', theirTimeWillBe: '对方时间', availability: '可用时间段',
    availabilityDesc: '输入你方便的时间，查看对方当地时间。', date: '日期', from: '开始', to: '结束', youAreFree: '我的可用时间', theySee: '对方看到的是',
    relationshipUse: '异地恋', workUse: '全球工作', friendUse: '海外朋友',
    ahead: '快 {hours} 小时', behind: '慢 {hours} 小时', sameTime: '同一时区',
    relationshipTip: '不错过晚安电话。', workTip: '快速找到共同工作时间。', friendTip: '避免凌晨吵醒对方。',
    crossesDate: '日期会改变', sameDate: '同一天'
  }
};

const $ = (id) => document.getElementById(id);
const state = { lang: 'ko' };

function labelFor(tz) {
  const item = zones.find((z) => z.tz === tz);
  return item ? item.labels[state.lang] : tz;
}

function populateZones() {
  const home = $('homeZone');
  const target = $('targetZone');
  const previousHome = home.value || 'Asia/Seoul';
  const previousTarget = target.value || 'America/New_York';
  [home, target].forEach((select) => {
    select.innerHTML = zones.map((z) => `<option value="${z.tz}">${z.labels[state.lang]} · ${z.tz}</option>`).join('');
  });
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

function fmt(date, timeZone, opts = {}) {
  const locale = state.lang === 'ko' ? 'ko-KR' : state.lang === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { timeZone, ...opts }).format(date);
}

function formatDateTime(date, timeZone) {
  return fmt(date, timeZone, {
    weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false
  });
}

function formatWindow(start, end, timeZone) {
  const startDate = fmt(start, timeZone, { month: 'short', day: 'numeric', weekday: 'short' });
  const endDate = fmt(end, timeZone, { month: 'short', day: 'numeric', weekday: 'short' });
  const startTime = fmt(start, timeZone, { hour: '2-digit', minute: '2-digit', hour12: false });
  const endTime = fmt(end, timeZone, { hour: '2-digit', minute: '2-digit', hour12: false });
  return startDate === endDate ? `${startDate} · ${startTime}–${endTime}` : `${startDate} ${startTime} → ${endDate} ${endTime}`;
}

function setDefaultDates() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const localDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const localTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  $('localDateTime').value = `${localDate}T${localTime}`;
  $('availableDate').value = localDate;
}

function updateClocks() {
  const now = new Date();
  const home = $('homeZone').value;
  const target = $('targetZone').value;
  $('homeLabel').textContent = labelFor(home);
  $('targetLabel').textContent = labelFor(target);
  $('homeClock').textContent = fmt(now, home, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  $('targetClock').textContent = fmt(now, target, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  $('homeDate').textContent = fmt(now, home, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  $('targetDate').textContent = fmt(now, target, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const diff = (offsetMinutes(now, target) - offsetMinutes(now, home)) / 60;
  const abs = Math.abs(diff);
  const rounded = Number.isInteger(abs) ? abs : abs.toFixed(1);
  const t = i18n[state.lang];
  $('diffText').textContent = diff === 0 ? t.sameTime : (diff > 0 ? t.ahead : t.behind).replace('{hours}', rounded);
}

function updateConverted() {
  const value = $('localDateTime').value;
  if (!value) return;
  const [date, time] = value.split('T');
  const source = zonedTimeToDate(date, time, $('homeZone').value);
  const target = $('targetZone').value;
  $('convertedTime').textContent = formatDateTime(source, target);
  const homeDay = fmt(source, $('homeZone').value, { year: 'numeric', month: '2-digit', day: '2-digit' });
  const targetDay = fmt(source, target, { year: 'numeric', month: '2-digit', day: '2-digit' });
  $('convertedMeta').textContent = `${labelFor(target)} · ${homeDay === targetDay ? i18n[state.lang].sameDate : i18n[state.lang].crossesDate}`;
}

function updateAvailability() {
  const date = $('availableDate').value;
  const start = $('availableStart').value;
  const end = $('availableEnd').value;
  if (!date || !start || !end) return;
  const home = $('homeZone').value;
  const target = $('targetZone').value;
  let startDate = zonedTimeToDate(date, start, home);
  let endDate = zonedTimeToDate(date, end, home);
  if (endDate <= startDate) endDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  $('homeWindow').textContent = formatWindow(startDate, endDate, home);
  $('targetWindow').textContent = formatWindow(startDate, endDate, target);
}

function updateTips() {
  $('relationshipTip').textContent = i18n[state.lang].relationshipTip;
  $('workTip').textContent = i18n[state.lang].workTip;
  $('friendTip').textContent = i18n[state.lang].friendTip;
}

function updateAll() {
  updateClocks();
  updateConverted();
  updateAvailability();
  updateTips();
}

function bindEvents() {
  $('languageSelect').addEventListener('change', (e) => { state.lang = e.target.value; translate(); });
  ['homeZone', 'targetZone', 'localDateTime', 'availableDate', 'availableStart', 'availableEnd'].forEach((id) => {
    $(id).addEventListener('input', updateAll);
    $(id).addEventListener('change', updateAll);
  });
  $('swapBtn').addEventListener('click', () => {
    const home = $('homeZone').value;
    $('homeZone').value = $('targetZone').value;
    $('targetZone').value = home;
    updateAll();
  });
  $('setNowBtn').addEventListener('click', () => { setDefaultDates(); updateAll(); });
  document.querySelectorAll('[data-preset-home]').forEach((btn) => {
    btn.addEventListener('click', () => {
      $('homeZone').value = btn.dataset.presetHome;
      $('targetZone').value = btn.dataset.presetTarget;
      updateAll();
    });
  });
}

populateZones();
setDefaultDates();
bindEvents();
translate();
setInterval(updateClocks, 1000);
