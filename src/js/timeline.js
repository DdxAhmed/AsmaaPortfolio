/**
 * Personal Skill Timeline & Skill Matrix Filter Module
 */

export function initSkillsAndTimeline() {
  // Skill Matrix Category Tabs
  const skillTabs = document.querySelectorAll('.skills-tabs .tab-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  if (skillTabs.length && skillCards.length) {
    skillTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        skillTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const cat = tab.dataset.category;
        skillCards.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'block';
            card.classList.add('reveal', 'active');
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Timeline Node Hover / Tilt Interaction
  const timelineCards = document.querySelectorAll('.timeline-content-card');
  timelineCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--accent-cyan)';
      card.style.boxShadow = '0 0 25px rgba(0, 240, 255, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = 'var(--border-subtle)';
      card.style.boxShadow = 'none';
    });
  });
}
