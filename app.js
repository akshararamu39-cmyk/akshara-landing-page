const icon = path => `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;

const icons = {
  food: icon('<path d="M4 11h16M5 11a7 7 0 0 1 14 0M4 15h16M6 19h12"/>'),
  gum: icon('<circle cx="8" cy="12" r="4"/><circle cx="15.5" cy="8.5" r="2.5"/><circle cx="17" cy="16" r="3"/>'),
  clothes: icon('<path d="m8 4-5 3 3 4 2-1v10h8V10l2 1 3-4-5-3c-.6 1.3-2 2-4 2S8.6 5.3 8 4Z"/>'),
  litter: icon('<path d="M7 7h10l-1 14H8L7 7ZM5 7h14M9 4h6M10 10v7M14 10v7"/>'),
  phone: icon('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M10 5h4M11 19h2"/>'),
  damage: icon('<path d="M4 20h16M7 20V8l5-4 5 4v12M12 4v16M8 12h3M13 9h3M13 15h3"/>'),
  tobacco: icon('<path d="M3 15h13v4H3v-4ZM16 15h3v4h-3M19 9c2 0 2-3 0-3M15 9c2 0 2-3 0-3"/>'),
  bullying: icon('<circle cx="8" cy="7" r="3"/><circle cx="17" cy="8" r="2.5"/><path d="M3 20c0-4 2-7 5-7s5 3 5 7M14 20c0-3 1-5 3-5s4 2 4 5M12 10l3 3"/>'),
  alcohol: icon('<path d="M8 2h8l-1 7c0 2 3 3 3 6v7H6v-7c0-3 3-4 3-6L8 2ZM9 7h6M9 16h6"/>'),
  visitor: icon('<rect x="4" y="5" width="16" height="16" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 17c.5-2 1.5-3 3-3s2.5 1 3 3M14 10h3M14 14h3M9 5V2h6v3"/>'),
  weapon: icon('<path d="m4 20 5-5M7 17l-2-2 8-8 4-3 3 3-3 4-8 8-2-2ZM13 7l4 4"/>'),
  record: icon('<rect x="3" y="5" width="14" height="14" rx="2"/><circle cx="10" cy="12" r="3"/><path d="m17 10 4-2v8l-4-2"/>'),
  manager: icon('<circle cx="12" cy="7" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8M16 4l2-2M8 4 6 2"/>'),
  police: icon('<path d="m12 2 8 4v5c0 5-3 9-8 11-5-2-8-6-8-11V6l8-4Z"/><path d="m12 7 1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 9.3 11 9l1-2Z"/>'),
  fire: icon('<path d="M13 2c1 5-3 6-1 10 1-2 3-3 4-5 3 3 4 6 3 9-1 4-4 6-8 6-5 0-8-3-7-8 .5-3 3-5 5-7 0 3 1 4 2 4-1-4 2-6 2-9Z"/>'),
  ambulance: icon('<path d="M3 6h11v12H3V6Zm11 4h4l3 4v4h-7v-8ZM8.5 9v6M5.5 12h6M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>'),
  child: icon('<circle cx="12" cy="8" r="4"/><path d="M5 22c0-6 2-9 7-9s7 3 7 9M8 7c1-1 2-2 4-2s3 1 4 2M9 9h.1M15 9h.1M10 11c1 1 3 1 4 0"/>'),
  women: icon('<circle cx="12" cy="8" r="5"/><path d="M12 13v9M8 18h8"/>'),
  disaster: icon('<path d="M12 3 2 20h20L12 3Z"/><path d="M12 9v5M12 17h.01"/>'),
  harassment: icon('<circle cx="12" cy="12" r="10"/><path d="M8 8l8 8M16 8l-8 8"/>')
};

const policies = [
  { icon: icons.food, title: "Junk food", detail: "Bring only nutritious food approved for school. Packaged junk food and sugary snacks should stay at home." },
  { icon: icons.gum, title: "Chewing gum", detail: "Chewing gum creates hygiene and safety concerns and is not permitted anywhere on campus." },
  { icon: icons.clothes, title: "Dirty clothes", detail: "Students should attend in a clean, complete school uniform and maintain personal hygiene." },
  { icon: icons.litter, title: "Littering", detail: "Use the designated bins. Keeping classrooms and shared spaces clean is everyone's responsibility." },
  { icon: icons.phone, title: "Mobile phones", detail: "Personal mobile phones may not be used without explicit school permission." },
  { icon: icons.damage, title: "Property damage", detail: "School property and learning resources must be handled carefully and respectfully." },
  { icon: icons.tobacco, title: "Smoking / tobacco", detail: "Tobacco, smoking and related products are strictly prohibited on school premises." },
  { icon: icons.bullying, title: "Bullying or fighting", detail: "Physical or verbal bullying is never acceptable. Report concerns to a trusted adult immediately." },
  { icon: icons.alcohol, title: "Alcohol or drugs", detail: "Alcohol, drugs and intoxicating substances are strictly forbidden and will be escalated." },
  { icon: icons.visitor, title: "Unauthorized visitors", detail: "Only approved visitors who complete the security process may enter the campus." },
  { icon: icons.weapon, title: "Weapons / sharp objects", detail: "Weapons, blades and any object that may cause harm are strictly prohibited." },
  { icon: icons.record, title: "Recording devices", detail: "Recording or photographing others without school authorization is not allowed." }
];

const contacts = [
  ["Admin Manager", "90631 98876", "9063198876", icons.manager],
  ["L. B. Nagar Police", "040-2785 3997", "04027853997", icons.police],
  ["L. B. Nagar Fire Station", "87126 85790", "8712685790", icons.fire],
  ["Ambulance", "108", "108", icons.ambulance],
  ["Child Emergency Helpline", "1098", "1098", icons.child],
  ["Women Safety Helpline", "181", "181", icons.women],
  ["Disaster Emergency", "1077", "1077", icons.disaster],
  ["Sexual Harassment", "1091", "1091", icons.harassment]
];

const grid = document.querySelector("#policy-grid");
const search = document.querySelector("#policy-search");
const noResults = document.querySelector("#no-results");

function renderPolicies(query = "") {
  const term = query.trim().toLowerCase();
  const matches = policies.filter(item => `${item.title} ${item.detail}`.toLowerCase().includes(term));
  grid.innerHTML = matches.map((item, index) => `
    <button class="policy-card" type="button" aria-expanded="false" aria-controls="policy-${index}" aria-label="${item.title}. Tap to learn why this is not allowed.">
      <span class="policy-icon" aria-hidden="true">${item.icon}</span><span class="plus" aria-hidden="true">+</span>
      <h3>${item.title}</h3><p id="policy-${index}">${item.detail}</p>
    </button>`).join("");
  noResults.hidden = matches.length !== 0;
  grid.querySelectorAll(".policy-card").forEach(card => {
    card.addEventListener("click", () => {
      const isOpen = card.getAttribute("aria-expanded") === "true";
      card.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

renderPolicies();
search.addEventListener("input", event => renderPolicies(event.target.value));

document.querySelector("#contact-grid").innerHTML = contacts.map(([label, display, number, contactIcon]) => `
  <a class="contact-card" href="tel:${number}" aria-label="Call ${label} at ${display}">
    <span class="contact-icon" aria-hidden="true">${contactIcon}</span>
    <span class="contact-copy"><small>${label}</small><b>${display}</b></span><i class="contact-action" aria-hidden="true">Call</i>
  </a>`).join("");

document.querySelector("#floating-call").addEventListener("click", () => {
  document.querySelector("#emergency").scrollIntoView({ behavior: "smooth" });
});
