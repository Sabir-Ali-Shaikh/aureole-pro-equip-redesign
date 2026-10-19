// Logos and display order from https://aureoleproequip.com/clients.html,
// retrieved 19 October 2026. Names transcribed from the supplied artwork.
const names = [
  "Aurobindo", "Axa Parenterals Ltd", "Alkem", "Dhamo Care Labs", "GB client logo",
  "H&H Healthcare and Cosmetics Pvt Ltd", "Hada", "Hetero", "Kilitch Drugs (India) Ltd",
  "Macleods", "MSN", "National Centre for Cell Science (NCCS)", "Pregna International Ltd",
  "Recipharm", "Saudi Pharmaceutical Industries", "Teena Labs Ltd", "Torque", "Umed",
  "Riche Group", "B. Braun", "Pharcos Specialty", "TCG Lifesciences", "Safecon Lifesciences",
  "SRL Ranbaxy Private Limited",
];

export const clientLogos = names.map((name, index) => ({
  id: index + 1,
  name,
  src: `/images/clients/client-${index + 1}.png`,
}));
