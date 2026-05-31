export interface MenuItem {
  label: string;
  id: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Volunteering", id: "volunteering" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

export const TYPE_SPEED = 55;
export const ERASE_SPEED = 30;
export const MS_PER_CHAR = 100;
export const MIN_DISPLAY = 1500;
export const CURSOR_BLINK_INTERVAL = 500;

export const BRAND_CYCLE = [
  "Ahmed Hazem",
  "GenAI Specialist?",
  "Ahmed Hazem",
  "NVIDIA Certified?",
  "Ahmed Hazem",
  "AI Entrepreneur?",
];