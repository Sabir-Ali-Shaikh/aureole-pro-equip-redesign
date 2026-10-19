// Source: https://aureoleproequip.com/events.html (retrieved 19 October 2026).
// Preserve the original page's groupings; no event dates were published.
export const eventCategories = ["All", "PharmaTech Expo exhibition at Nesco", "Diwali Celebration"];
export const events = [2, 3, 5, 6, 7, 14].map((id, index) => ({
  id,
  src: `/images/events/${id}.jpg`,
  category: eventCategories[id === 14 ? 2 : 1],
  alt: id === 14 ? "Aureole Diwali celebration" : `Aureole at the PharmaTech Expo exhibition at Nesco, photograph ${index + 1}`,
}));
