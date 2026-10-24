# EcoSphere AI — HCI Comparative Prototype

An interactive Human-Computer Interaction (HCI) university research prototype demonstrating the profound impact of interface design on usability, cognitive load, and accessibility through a dual-mode AI waste classification application.

---

## 1. Project Purpose

The primary objective of **EcoSphere AI** is to provide an empirical, side-by-side comparative laboratory where evaluators can experience the exact same AI-powered waste classification task under two contrasting design paradigms:

1. **Good HCI Mode:** Implements industry best practices, Nielsen-Norman Usability Heuristics, ISO 9241 ergonomics, clear visual hierarchy, accessible contrast (WCAG 2.1 AA), and empathetic user feedback.
2. **Bad HCI Mode:** Demonstrates selected, realistic interaction design anti-patterns — including technical jargon, competing visual hierarchies, banner fatigue, ambiguous iconography, obscure status codes, and low contrast — while **preserving full system functionality**.

> **Note on Simulated AI:**  
> AI classification is simulated because this prototype evaluates HCI and interaction design rather than machine-learning accuracy. Any uploaded or captured image deterministically triggers the simulated inference pipeline to keep evaluation controlled and reproducible.

---

## 2. Complete Application Flow

The evaluator can execute the identical 9-step task workflow across both Good and Bad modes:

```text
1. Login
   ↓
2. Home Dashboard
   ↓
3. Scan Waste (Camera / Photo Upload)
   ↓
4. Review Photo
   ↓
5. Analyzing Waste (Simulated AI Inference)
   ↓
6. Classification Result
   ↓
7. Disposal Guide
   ↓
8. Disposal Complete
   ↓
9. Scan History
```

---

## 3. Good HCI vs. Bad HCI Comparative Breakdown

| Screen | Good HCI Principles | Bad HCI Anti-Patterns (Intentional Violations) |
| :--- | :--- | :--- |
| **1. Login** | Persistent input labels, inline human-friendly validation ("Please enter a valid email address"), clear primary/secondary hierarchy ("Log In" vs "Create Account"). | Distracting promotional gamification banners ("Earn 500 EcoPoints", "12 badges"), embedded "OK"/"S..." input buttons, HTTP "Error 401 · Authentication Failed", competing identical dark green buttons ("Access 1" vs "Create Access 2"). |
| **2. Home Dashboard** | Prominent "Scan Waste" primary card with camera badge, balanced secondary action cards (Scan History, EcoPoints, Disposal Guide), 3-column impact metrics. | Action labeled "Process Waste" (machine-centric), "EcoPoints" card colored solid dark green (stealing primary focus), harsh thick card borders. |
| **3. Scan Waste** | Clear 2-line instruction ("Place one waste item inside the frame"), WCAG AA contrast, user-centric status ("Ready to scan"), large 72px shutter button, direct file upload. | Vague instruction ("Position object properly"), washed-out low contrast text (`#adbdb4`, failing WCAG), system-centric status ("System Ready"), smaller shutter button. |
| **4. Review Photo** | Reassuring qualitative feedback ("Image quality: Good"), clear primary "Analyze Waste" vs secondary outlined "Retake Photo", visible "Choose Another Photo" escape route. | Obscure quantitative metric ("Quality Status: 72%"), vague verb ("Proceed"), identical solid green buttons for both Analyze and Retake (competing affordance), 11px washed-out link. |
| **5. Analyzing Waste** | Reassuring status ("Analyzing your waste..."), clear multi-step progress (Uploading → Identifying → Preparing Result), polite reassurance notice. | Developer jargon ("Executing inference pipeline...", "Processing tensor", "sys: active"), confusing ambiguous cancel `×` icon next to spinner, non-descriptive steps ("Stage 1", "Stage 2/4"). |
| **6. Classification Result** | Everyday human term ("Plastic Bottle"), clear green "Recyclable" badge, concrete bin direction ("Dispose in: Plastic / Recycling Bin"), primary "View Disposal Guide →". | Chemical jargon ("PET Class 04"), over-prominent bold metric ("93% confidenc"), cryptic code ("Category B"), both buttons rendered as low-contrast pale ghost buttons with ambiguous `ⓘ` glyphs. |
| **7. Disposal Guide** | Structured, numbered steps (1, 2, 3) paired with visual icons (Bottle, Droplet, Bin) for rapid scanning; clear "Mark as Disposed" action. | Dense unformatted paragraph wall of text without sequential chunking; vague button labeled "Confirm" competing with a secondary solid green button. |
| **8. Disposal Complete** | Positive reinforcement ("Great job!", "Item marked as disposed."), balanced "+10 EcoPoints earned" subtle pill badge, clear "Scan Another Item" or "Done" exit routes. | Cold robotic tone ("Status Updated"), EcoPoints banner styled with solid dark green completely overpowering the completion confirmation. |
| **9. Scan History** | Working real-time search, comfortable filter chips ("All", "Recyclable", "Non-Recyclable"), human categories (Recyclable, Organic, Non-Recyclable), drilldown chevron `>`. | Cryptic codes ("Type A", "Type B"), cramped touch targets, ambiguous three-dots `···` icon replacing the navigation chevron. |

---

## 4. Major HCI Principles Demonstrated

- **Nielsen's Heuristic #1 (Visibility of System Status):** Continuous, realistic progress feedback during simulated analysis and clear completion indicators.
- **Nielsen's Heuristic #2 (Match between System and Real World):** Use of familiar terminology ("Plastic Bottle", "Plastic / Recycling Bin") over chemical/system jargon ("PET Class 04", "Category B", "Processing tensor").
- **Nielsen's Heuristic #3 (User Control and Freedom):** Consistent back navigation, photo retake affordances, and cancel options.
- **Nielsen's Heuristic #4 (Consistency and Standards):** Predictable navigation hierarchy, standardized button placements, and recognized iconography.
- **Nielsen's Heuristic #5 (Error Prevention):** Inline format verification on login and guidance on photo capture before submission.
- **Nielsen's Heuristic #6 (Recognition Rather than Recall):** Persistent field labels, step-by-step numbered disposal guidelines, and visual item thumbnails.
- **Nielsen's Heuristic #7 (Flexibility and Efficiency of Use):** Real-time history search and category filtering.
- **Nielsen's Heuristic #8 (Aesthetic and Minimalist Design):** Elimination of irrelevant banners and cognitive clutter in Good HCI Mode.
- **Nielsen's Heuristic #9 (Help Users Recognize and Recover from Errors):** Constructive plain-language messages instead of cryptic HTTP status codes.
- **Fitts' Law & Hick's Law:** Touch target sizing (minimum 48px/52px in Good mode) and single dominant primary actions preventing decision paralysis.

---

## 5. Technology Stack

- **React 19**
- **Vite**
- **JavaScript (ES Modules)**
- **CSS3 (Custom Design System with Zero Heavy Framework Overhead)**
- **LocalStorage API (State Persistence for EcoPoints and Scan History)**

---

## 6. Installation & Running Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 1. Clone or Navigate to the Project Directory
```bash
cd ecosphere-ai
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

The application will be running locally at `http://localhost:5173`.

---

## 7. Interactive Features for Evaluators

1. **Development Mode Selector:** Toggle between **Good HCI Mode** and **Bad HCI Mode** at any moment via the top demo bar; your current screen, captured photo, and state are preserved.
2. **Jump to Screen Dropdown:** Instant navigation to any of the 9 screens for isolated testing.
3. **HCI Design Inspector Drawer:** Click the **HCI Inspector** button in the toolbar to reveal an academic side panel breaking down the specific heuristics, design choices, and a toggle to inspect the original reference screenshots.
4. **Real Image Upload:** In Screen 3 (Scan Waste) and Screen 4 (Review Photo), you can upload any custom image file or test with the preloaded high-fidelity waste assets.
5. **Interactive Scan History:** Live search bar by item name or category, filter pills (All, Recyclable, Non-Recyclable), and detail modal on card click.
6. **State Persistence & Reset:** EcoPoints and newly disposed items persist in `localStorage`. Click **Reset** in the top toolbar to restore clean initial prototype demo data anytime.
