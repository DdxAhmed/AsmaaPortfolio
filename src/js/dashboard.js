/**
 * Full Interactive Moderator Dashboard Component
 */

let initialActivities = [
  { id: 1, type: "comments", category: "comment", title: "New Comment on Announcement Post", time: "2 min ago", author: "@tech_enthusiast", icon: "💬", status: "Pending" },
  { id: 2, type: "reports", category: "report", title: "Spam Report Flagged by System Bot", time: "5 min ago", author: "User ID #982", icon: "⚠️", status: "Flagged" },
  { id: 3, type: "discussions", category: "discussion", title: "Community Discussion Thread Escalation", time: "12 min ago", author: "@sports_fanatic", icon: "🔥", status: "Active" },
  { id: 4, type: "comments", category: "comment", title: "Product Feature Inquiry Answered", time: "25 min ago", author: "@dev_learner", icon: "💬", status: "Resolved" },
  { id: 5, type: "reports", category: "report", title: "Policy Check on External Link", time: "40 min ago", author: "Automated Filter", icon: "🛡️", status: "Resolved" }
];

export function initFullDashboard() {
  const container = document.querySelector('.full-dashboard');
  if (!container) return;

  const activityListElem = document.getElementById('dashActivityList');
  const filterBtns = container.querySelectorAll('.filter-btn');
  const interactionsCounter = document.getElementById('kpiInteractions');

  let currentFilter = 'all';
  let interactionsCount = 1284;

  function renderActivities() {
    if (!activityListElem) return;

    const filtered = currentFilter === 'all' 
      ? initialActivities 
      : initialActivities.filter(a => a.type === currentFilter);

    if (filtered.length === 0) {
      activityListElem.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-subtle);">No items in this category.</div>`;
      return;
    }

    activityListElem.innerHTML = filtered.map(item => `
      <div class="activity-item" data-id="${item.id}">
        <div class="activity-info">
          <div class="activity-icon ${item.category}">
            ${item.icon}
          </div>
          <div>
            <div class="activity-title-text">${item.title}</div>
            <div class="activity-sub-text">${item.author} • ${item.time}</div>
          </div>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center;">
          <span class="feed-badge ${item.status.toLowerCase()}">${item.status}</span>
          <button class="activity-action-btn" data-id="${item.id}" data-action="resolve">
            ${item.status === 'Resolved' ? 'Completed' : 'Resolve'}
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners to action buttons
    activityListElem.querySelectorAll('.activity-action-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.dataset.id);
        resolveActivityItem(id);
      });
    });
  }

  function resolveActivityItem(id) {
    initialActivities = initialActivities.map(item => {
      if (item.id === id) {
        return { ...item, status: 'Resolved' };
      }
      return item;
    });

    interactionsCount += 1;
    if (interactionsCounter) {
      interactionsCounter.textContent = interactionsCount.toLocaleString();
    }

    renderActivities();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderActivities();
    });
  });

  renderActivities();

  // Progress Bar Animations Trigger on Scroll
  const progressFills = container.querySelectorAll('.progress-bar-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressFills.forEach(fill => {
          fill.style.width = fill.dataset.targetWidth || '0%';
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);
}
