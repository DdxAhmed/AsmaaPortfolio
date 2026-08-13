/**
 * Hero Section Live Moderation Dashboard Simulation
 */

export function initHeroDashboard() {
  const dashContainer = document.querySelector('.hero-dashboard-container');
  if (!dashContainer) return;

  // Live feed simulation ticker
  const feedItems = [
    { text: "Flagged comment resolved in #general", type: "resolved", badge: "Resolved", time: "Just now" },
    { text: "Member welcome response dispatched", type: "approved", badge: "Approved", time: "1m ago" },
    { text: "Spam link automatically filtered", type: "flagged", badge: "Flagged", time: "3m ago" },
    { text: "User query answered in Q&A thread", type: "approved", badge: "Approved", time: "5m ago" },
    { text: "Community guidelines check passed", type: "approved", badge: "Approved", time: "8m ago" }
  ];

  const liveFeedContainer = document.getElementById('heroLiveFeed');
  if (!liveFeedContainer) return;

  function renderFeed() {
    liveFeedContainer.innerHTML = feedItems.map(item => `
      <div class="feed-item">
        <div class="feed-text">
          <span class="pulse-dot pulse-dot-cyan"></span>
          <span>${item.text}</span>
        </div>
        <span class="feed-badge ${item.type}">${item.badge}</span>
      </div>
    `).join('');
  }

  renderFeed();

  // Tab switcher in Hero Mockup
  const miniBtns = dashContainer.querySelectorAll('.dash-btn-mini');
  miniBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      miniBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Refresh live feed item order on tab click
      feedItems.unshift(feedItems.pop());
      renderFeed();
    });
  });

  // Simulated minor pulse in engagement counter
  setInterval(() => {
    const rateElem = document.getElementById('heroEngagementRate');
    if (rateElem) {
      const base = 94.7;
      const variation = (Math.random() * 0.4 - 0.2).toFixed(1);
      rateElem.textContent = (base + parseFloat(variation)).toFixed(1) + '%';
    }
  }, 4000);
}
