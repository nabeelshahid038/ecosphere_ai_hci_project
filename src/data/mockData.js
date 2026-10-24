/**
 * EcoSphere AI — HCI Prototype Mock Data & Knowledge Base
 * 
 * Note: AI classification is simulated because this prototype evaluates
 * HCI and interaction design rather than machine-learning accuracy.
 */

export const INITIAL_STATS = {
  itemsScanned: 24,
  itemsRecycled: 18,
  ecoPoints: 180,
};

export const INITIAL_SCAN_HISTORY = [
  {
    id: 1,
    item: "Plastic Bottle",
    category: "Recyclable",
    badCategory: "Type A",
    date: "Oct 5, 2026 · 9:32 AM",
    group: "Today",
    image: "/assets/bottle-clean.png",
    confidence: 93,
    points: 10,
    disposed: true,
    isRecyclable: true,
  },
  {
    id: 2,
    item: "Banana Peel",
    category: "Organic",
    badCategory: "Type B",
    date: "Oct 5, 2026 · 8:15 AM",
    group: "Today",
    image: "/assets/banana-peel.png",
    confidence: 98,
    points: 5,
    disposed: true,
    isRecyclable: true,
  },
  {
    id: 3,
    item: "Snack Wrapper",
    category: "Non-Recyclable",
    badCategory: "Type A",
    date: "Oct 4, 2026 · 4:46 PM",
    group: "Yesterday",
    image: "/assets/snack-wrapper.png",
    confidence: 89,
    points: 0,
    disposed: true,
    isRecyclable: false,
  },
];

export const DEMO_CLASSIFICATION_RESULT = {
  item: "Plastic Bottle",
  technicalClass: "PET Class 04",
  confidence: 93,
  recyclable: true,
  bin: "Plastic / Recycling Bin",
  badBin: "Category B",
  guidance: "Empty and rinse the bottle before recycling.",
  ecoPoints: 10,
  image: "/assets/bottle-ground.png",
};

/**
 * Academic HCI explanations for each screen comparing Good HCI vs Bad HCI
 * based on Nielsen Norman 10 Usability Heuristics & ISO 9241 Ergonomics.
 */
export const HCI_SCREEN_ANALYSIS = {
  login: {
    screenName: "Login",
    goodHci: [
      {
        principle: "Visual Hierarchy & Salience",
        detail: "Clear primary 'Log In' button (dark green filled) versus secondary 'Create Account' (outlined). Eye path is natural from top to bottom.",
      },
      {
        principle: "Recognition Over Recall (Heuristic #6)",
        detail: "Visible persistent input labels ('Email Address', 'Password') avoid memory burden once user starts typing.",
      },
      {
        principle: "Error Prevention & Inline Feedback (Heuristic #5 & #9)",
        detail: "Helpful inline validation messages only appear after user interaction with plain English instructions.",
      },
      {
        principle: "Simplicity & Cleanliness (Heuristic #8)",
        detail: "Aesthetic, uncluttered design with an eco illustration and calm green palette, avoiding cognitive overload.",
      },
    ],
    badHci: [
      {
        principle: "Visual Clutter & Banner Fatigue",
        detail: "Competing promotional gamification banners ('500 EcoPoints', '12 badges') distract from primary authentication.",
      },
      {
        principle: "Violated Action Hierarchy",
        detail: "Two identical dark green buttons: 'Access 1' and 'Create Access 2'. User cannot immediately distinguish primary from secondary action.",
      },
      {
        principle: "Technical Error Messages (Heuristic #9)",
        detail: "'Error 401 · Authentication Failed' uses HTTP status codes instead of constructive human-friendly guidance.",
      },
      {
        principle: "Intrusive Input Controls",
        detail: "Bizarre 'OK' and 'S...' buttons embedded directly inside the input fields confuse input typing with form submission.",
      },
    ],
  },
  home: {
    screenName: "Home Dashboard",
    goodHci: [
      {
        principle: "Fitts' Law & Dominant Affordance",
        detail: "'Scan Waste' is large, vibrant green, and positioned prominently with a distinct camera badge and arrow icon.",
      },
      {
        principle: "Visual Balance & Chunking",
        detail: "Secondary actions (Scan History, EcoPoints, Disposal Guide) share identical neutral card styling, preserving primary focus.",
      },
      {
        principle: "Status Visibility (Heuristic #1)",
        detail: "Clear eco impact metrics (Scanned, Recycled, Points) formatted in 3 clean columns with clear labels.",
      },
      {
        principle: "Consistent Navigation (Heuristic #4)",
        detail: "Standard bottom navigation bar with active state indicator (pill badge) and clear icons.",
      },
    ],
    badHci: [
      {
        principle: "Ambiguous Terminology (Heuristic #2)",
        detail: "Primary action renamed to 'Process Waste' — technical jargon instead of user-centric task language ('Scan Waste').",
      },
      {
        principle: "Competing Visual Weight",
        detail: "The 'EcoPoints' secondary card is colored solid dark green, directly stealing visual attention from the primary action.",
      },
      {
        principle: "Inconsistent Borders & Padding",
        detail: "Secondary cards use thick, harsh borders that introduce visual noise and weaken Gestalt grouping.",
      },
    ],
  },
  scan: {
    screenName: "Scan Waste",
    goodHci: [
      {
        principle: "Direct & Clear Guidance",
        detail: "Explicit instruction: 'Place one waste item inside the frame.' Two clear lines with high legibility.",
      },
      {
        principle: "Accessible Contrast (WCAG 2.1 AA)",
        detail: "Subtitles and status ('Ready to scan') use high-contrast text that passes accessibility standards.",
      },
      {
        principle: "Strong Capture Affordance",
        detail: "Generous shutter button with dual concentric rings and prominent camera glyph.",
      },
      {
        principle: "User Control & Freedom (Heuristic #3)",
        detail: "Accessible Back button, Help tooltip, and direct 'Upload Photo' fallback option.",
      },
    ],
    badHci: [
      {
        principle: "Vague Instructions",
        detail: "'Position object properly' lacks context (which object? what is 'properly'?).",
      },
      {
        principle: "Low Contrast (Accessibility Failure)",
        detail: "Subtitle text '#b5c4bb' fails WCAG contrast ratio (1.8:1 instead of required 4.5:1).",
      },
      {
        principle: "System-Centric Terminology",
        detail: "Status displays 'System Ready' instead of explaining what the user should do.",
      },
      {
        principle: "Reduced Shutter Target Size (Fitts' Law)",
        detail: "Smaller capture button increases tap error rate on mobile touchscreens.",
      },
    ],
  },
  review: {
    screenName: "Review Photo",
    goodHci: [
      {
        principle: "Meaningful Qualitative Feedback",
        detail: "'Image quality: Good' provides clear qualitative reassurance without confusing technical figures.",
      },
      {
        principle: "Clear Action Hierarchy",
        detail: "Primary 'Analyze Waste' (solid green) stands out distinctively from secondary 'Retake Photo' (outlined).",
      },
      {
        principle: "Forgiving UI & Error Recovery",
        detail: "'Retake Photo' and 'Choose Another Photo' give immediate escapes if the photo is blurry.",
      },
    ],
    badHci: [
      {
        principle: "Obscure Quantitative Metric",
        detail: "'Quality Status: 72%' leaves user wondering: is 72% good or bad? What threshold is acceptable?",
      },
      {
        principle: "Vague Action Verb",
        detail: "'Proceed' fails to communicate what will happen next (unlike 'Analyze Waste').",
      },
      {
        principle: "Equal Visual Weight (Hick's Law Conflict)",
        detail: "Both 'Proceed' and 'Retake Photo' are identical solid green buttons, causing decision latency.",
      },
      {
        principle: "Tiny Low-Contrast Link",
        detail: "'Choose Another Photo' is rendered in 11px washed-out grey, violating touch target and contrast guidelines.",
      },
    ],
  },
  analyzing: {
    screenName: "Analyzing Waste",
    goodHci: [
      {
        principle: "Visibility of System Status (Heuristic #1)",
        detail: "'Analyzing your waste... This usually takes a few seconds.' with human-friendly step descriptions.",
      },
      {
        principle: "Progress Transparency",
        detail: "Structured multi-step timeline (Uploading Image → Identifying Material → Preparing Result).",
      },
      {
        principle: "Reassurance & Anxiety Reduction",
        detail: "Notice badge: 'Please keep the app open while analysis is in progress.' sets clear expectations.",
      },
    ],
    badHci: [
      {
        principle: "Developer / Internal Jargon (Heuristic #2)",
        detail: "'Executing inference pipeline...', 'Processing tensor', 'sys: active'. Matches system model, not user mental model.",
      },
      {
        principle: "Ambiguous Cancel Affordance",
        detail: "Tiny 'x' adjacent to the spinner looks like a broken cancel button or artifact.",
      },
      {
        principle: "Vague Non-Descriptive Steps",
        detail: "'Stage 1 (done)', 'Stage 2/4' hide what the AI is actually doing for the user.",
      },
    ],
  },
  result: {
    screenName: "Classification Result",
    goodHci: [
      {
        principle: "Human-Centric Mental Model",
        detail: "Dominant label is 'Plastic Bottle', followed by clear 'Recyclable' green badge.",
      },
      {
        principle: "Actionable Disposal Recommendation",
        detail: "Prominent container card: 'Dispose in: Plastic / Recycling Bin' tells user exactly where to go.",
      },
      {
        principle: "Secondary Technical Metrics",
        detail: "'93% confidence' is shown as secondary supporting context, not as the primary headline.",
      },
      {
        principle: "Clear Navigation Forward",
        detail: "Prominent 'View Disposal Guide →' button leads directly to the next logical task step.",
      },
    ],
    badHci: [
      {
        principle: "Chemical / Industrial Jargon",
        detail: "'PET Class 04' replaces 'Plastic Bottle' as the main title, confusing everyday consumers.",
      },
      {
        principle: "Over-emphasized Raw Metric",
        detail: "'93% confidenc' is displayed in bold text with a typographical clipping defect.",
      },
      {
        principle: "Obscure Stream Categorization",
        detail: "'Recommended stream: Category B' forces the user to guess which physical bin matches 'Category B'.",
      },
      {
        principle: "Muted Low-Contrast Ghost Buttons",
        detail: "Both buttons are pale green outlines with identical info icons, providing no visual priority.",
      },
    ],
  },
  guide: {
    screenName: "Disposal Guide",
    goodHci: [
      {
        principle: "Chunking & Sequential Instructions",
        detail: "Numbered steps (1, 2, 3) with icons (bottle, water drops, bin) allow rapid scanning.",
      },
      {
        principle: "Clear Confirmation Affordance",
        detail: "'Mark as Disposed' clearly commits the recycling action and awards points.",
      },
      {
        principle: "Visual Summary of Context",
        detail: "Identified item card at top maintains situational awareness.",
      },
    ],
    badHci: [
      {
        principle: "Unstructured Wall of Text",
        detail: "One dense run-on paragraph forces reading every word rather than quick cognitive chunking.",
      },
      {
        principle: "Vague Button Label",
        detail: "'Confirm' does not clarify what is being confirmed (disposal? classification? navigation?).",
      },
      {
        principle: "Competing Button Prominence",
        detail: "Both 'Confirm' and 'Scan Another Item' share identical dark green styling.",
      },
    ],
  },
  complete: {
    screenName: "Disposal Complete",
    goodHci: [
      {
        principle: "Positive Reinforcement & Clear Closure",
        detail: "Green checkmark + 'Great job!' + 'Item marked as disposed.' delivers satisfying task completion.",
      },
      {
        principle: "Balanced Reward Display",
        detail: "'+10 EcoPoints earned' badge supports the achievement without overwhelming the status confirmation.",
      },
      {
        principle: "Logical Exit Routes",
        detail: "Buttons allow scanning another item or returning home via 'Done'.",
      },
    ],
    badHci: [
      {
        principle: "Robotic / Impersonal Tone",
        detail: "'Status Updated' treats the user like a database operator rather than an eco-conscious citizen.",
      },
      {
        principle: "Distorted Reward Salience",
        detail: "Points banner is styled with dominant solid dark green, completely overpowering the status text.",
      },
    ],
  },
  history: {
    screenName: "Scan History",
    goodHci: [
      {
        principle: "Effective Filtering & Search (Heuristic #7)",
        detail: "Working search bar + filter pills ('All', 'Recyclable', 'Non-Recyclable') let user quickly locate items.",
      },
      {
        principle: "Natural Categorization (Recyclable, Organic, Non-Recyclable)",
        detail: "Familiar everyday terms matched to intuitive color badges.",
      },
      {
        principle: "Clear Affordance for Drilldown",
        detail: "Chevron icon `>` explicitly signals that tapping an item opens more details.",
      },
    ],
    badHci: [
      {
        principle: "Cryptic Classification Codes",
        detail: "'Type A' and 'Type B' force the user to recall what each arbitrary classification letter means.",
      },
      {
        principle: "Ambiguous Iconography",
        detail: "Three dots '···' suggest an action menu rather than an item details drilldown.",
      },
      {
        principle: "Cramped Touch Targets",
        detail: "Filter pills are compressed with uneven padding, violating touch ergonomics.",
      },
    ],
  },
};
