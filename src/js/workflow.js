/**
 * Moderation Workflow Stepper & Interactive Details
 */

const workflowData = {
  monitor: {
    step: "01",
    title: "1. Monitor Community Activity",
    description: "Continuous real-time tracking of comments, direct messages, incoming reports, and trending discussions across digital channels to maintain safety and order.",
    bullets: [
      "Track audience comments and user-generated content 24/7",
      "Identify early signs of conflict, spam, or toxic conversations",
      "Monitor engagement sentiment and page activity surges"
    ],
    demoCode: `// Live Monitoring Matrix\nStatus: Active Scan Mode\nKeywords Flagged: 0\nQueue Latency: 1.2s\nSentiment Score: 98% Positive`
  },
  understand: {
    step: "02",
    title: "2. Understand Audience Intent",
    description: "Analyzing context, cultural nuance, and emotional intent before acting. Distinguishing constructive feedback from hostile behavior.",
    bullets: [
      "Assess tone, intent, and community guidelines context",
      "Separate genuine user frustration from intentional trolling",
      "Understand demographics and audience expectations"
    ],
    demoCode: `// Intent Classifier\nContext: Product Feedback Inquiry\nUrgency: High\nTone: Passionate / Seeking Solution\nAction Required: Empathetic Escalation`
  },
  respond: {
    step: "03",
    title: "3. Respond & Communicate",
    description: "Crafting clear, professional, empathetic responses that represent the brand voice while resolving user inquiries efficiently.",
    bullets: [
      "Maintain consistent, respectful, and authoritative brand voice",
      "De-escalate tension through active listening and clarity",
      "Provide accurate, actionable answers to community questions"
    ],
    demoCode: `// Brand Response Generator\nTemplate: Professional Guidance\nStatus: Sent\nTone Check: Empathetic, Solution-Oriented\nCustomer Satisfaction: High`
  },
  resolve: {
    step: "04",
    title: "4. Resolve Conflicts Efficiently",
    description: "Decisive conflict resolution: removing inappropriate content, enforcing community rules calmly, and protecting page health under pressure.",
    bullets: [
      "Handle negative comments & heated debates professionally",
      "Enforce community rules without aggravating users",
      "Escalate critical incidents to technical or management teams"
    ],
    demoCode: `// Conflict Resolution Engine\nAction: De-escalated & Guidelines Sent\nIncident Ticket: #RES-8924\nResolution Time: < 3 Minutes`
  },
  engage: {
    step: "05",
    title: "5. Foster Community Engagement",
    description: "Transforming standard comment sections into vibrant, welcoming spaces by encouraging positive discussion and rewarding top contributors.",
    bullets: [
      "Spurring constructive discussion around key topics",
      "Recognizing active community members and top supporters",
      "Building long-term loyalty and brand advocacy"
    ],
    demoCode: `// Engagement Booster\nCommunity Health Index: 99.4%\nRetention Rate: +18.2%\nActive Discussions: 24 Ongoing Threads`
  }
};

export function initWorkflow() {
  const stepBtns = document.querySelectorAll('.workflow-step-btn');
  const titleElem = document.getElementById('wfDetailTitle');
  const descElem = document.getElementById('wfDetailDesc');
  const bulletsElem = document.getElementById('wfDetailBullets');
  const demoElem = document.getElementById('wfDetailDemo');

  if (!stepBtns.length || !titleElem) return;

  function setWorkflowStep(key) {
    const data = workflowData[key];
    if (!data) return;

    // Update active button state
    stepBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.step === key);
    });

    // Update text and bullets with smooth fade
    titleElem.textContent = data.title;
    descElem.textContent = data.description;

    bulletsElem.innerHTML = data.bullets.map(b => `
      <div class="bullet-item">
        <span class="bullet-icon">✦</span>
        <span>${b}</span>
      </div>
    `).join('');

    demoElem.textContent = data.demoCode;
  }

  stepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const stepKey = btn.dataset.step;
      setWorkflowStep(stepKey);
    });
  });

  // Default initial step
  setWorkflowStep('monitor');
}
