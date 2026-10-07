const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const timelineData = {
  ucsb: {
    destination: 'UCSB Title IX / DHP',
    status: 'Awaiting follow-up',
    items: [
      ['Report submitted', 'Oct. 10 — 3:12 PM', 'done'],
      ['Submission confirmation saved', 'Oct. 10 — 3:13 PM', 'done'],
      ['Follow-up communication logged', 'Oct. 10 — 4:45 PM', 'done'],
      ['No new response logged', 'Current', 'waiting']
    ]
  },
  police: {
    destination: 'Law enforcement',
    status: 'Awaiting update',
    items: [
      ['Report materials exported', 'Oct. 10 — 3:12 PM', 'done'],
      ['Submission receipt saved', 'Oct. 10 — 3:18 PM', 'done'],
      ['Case / reference number added', 'Oct. 10 — 4:02 PM', 'done'],
      ['No later update logged', 'Current', 'waiting']
    ]
  }
};

const tabs = document.querySelectorAll('.timeline-tab');
const destination = document.getElementById('timeline-destination');
const status = document.getElementById('timeline-status');
const list = document.getElementById('timeline-list');

function renderTimeline(key) {
  const data = timelineData[key];
  if (!data || !destination || !status || !list) return;
  destination.textContent = data.destination;
  status.textContent = data.status;
  list.innerHTML = data.items.map(([label, time, state]) =>
    `<li class="${state}"><span>${label}</span><time>${time}</time></li>`
  ).join('');
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderTimeline(tab.dataset.destination);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
