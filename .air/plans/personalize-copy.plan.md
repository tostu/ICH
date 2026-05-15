# Goal
Rewrite the website copy across the main components to feel more natural, personal, and less like an agency sales pitch, focusing purely on who Torge is and what he can do.

# Approach
We will shift the tone from a formal "architectural manifesto" to a personal, first-person portfolio style. By using "Ich" and speaking directly, the copy will feel more human and approachable. We will tone down the heavy, absolute statements ("Massive Systeme", "Keine Fließbandarbeit") and replace them with authentic descriptions of his skills, his approach to software as a craft, and his actual focus areas (Backend, Systemdesign). As requested, the photography metaphors will be kept separate from the software descriptions.

# File Changes
- **Modify** `src/lib/components/Hero.svelte`:
  - Change the headline and subtitle to introduce Torge directly (e.g., "Hi, ich bin Torge.") and clearly state his focus on backend architecture without the heavy sales jargon.
- **Modify** `src/lib/components/Philosophie.svelte`:
  - Rewrite the section to reflect his personal approach to coding ("Handwerk statt Hype") instead of preaching absolute rules. The text will focus on why he values clarity and stability.
- **Modify** `src/lib/components/Expertise.svelte`:
  - Change the headline from "Massive Systeme." to "Was ich kann."
  - Rewrite the cards to plainly and authentically list his skills: Backend & Architektur, Systemdesign, and Performance & Refactoring.
- **Modify** `src/lib/components/Werte.svelte`:
  - Update the grid items and descriptions to reflect his personal working principles (e.g., understanding things fundamentally instead of copy-pasting, writing code for humans) rather than agency-style promises.

# Implementation Steps
1. **Task 1: Update Hero Component**
   - Edit `src/lib/components/Hero.svelte`.
   - Replace the headline and subtitle with the new personal introduction.
2. **Task 2: Update Philosophie Component**
   - Edit `src/lib/components/Philosophie.svelte`.
   - Replace the headline and body paragraphs with the new authentic approach text.
3. **Task 3: Update Expertise Component**
   - Edit `src/lib/components/Expertise.svelte`.
   - Update the headline and the `[ { num, title, desc } ]` array with the new skill descriptions.
4. **Task 4: Update Werte Component**
   - Edit `src/lib/components/Werte.svelte`.
   - Update the `[ { word, desc, ... } ]` array with the more personal value descriptions.

# Acceptance Criteria
- The website copy reads in the first person ("Ich").
- The tone is conversational and authentic, not sales-driven.
- The photography aspect is not mixed into the code explanations as a metaphor.
- The "Urban Craftsman" identity (focus on stability, craft, and backend) is maintained but feels like a natural part of his personality.

# Verification Steps
- Run the local dev server (`bun run dev`).
- Open the application preview.
- Read through the landing page to ensure the flow is natural, the German is idiomatic, and there are no awkward or overly corporate phrases left.
- Verify that the layout remains intact with the new text lengths.

# Risks & Mitigations
- *Risk*: The text might become too informal and lose the professional edge required for a Software Architect.
- *Mitigation*: Ensure that while the tone is personal, the content focuses on deep technical competence (Systemdesign, Java, Spring Boot, Architecture) to maintain professional authority.