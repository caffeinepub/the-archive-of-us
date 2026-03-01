# Specification

## Summary
**Goal:** Fix inline letter rendering in the hero title animation and add a full animated "Tribute Letters" page section for the Sacred Six friends.

**Planned changes:**
- Fix `HeroSection` component so staggered letter-by-letter animated spans render inline (not stacked on separate lines), preserving the animation while allowing natural text flow.
- Update `friendsData.ts` to include each friend's full tribute content: name, emoji, title (e.g. "THE HEARTBINDER"), subtitle epithet, and full prose tribute message for all six: Tiya, Aaliya, Aaheli, Anshima, Anya, Manasvi.
- Create a "Tribute Letters" section integrated into `App.tsx` that presents each of the six friends as an elegant handwritten-letter-style card with scroll-triggered fade/slide-in entrance animations, using the existing dark gold aesthetic, serif/display typography, and gold accent styling.
- Implement per-friend background animations: Tiya — heartbeat pulse glow; Aaliya — moving constellation of stars; Aaheli — golden crown outline glow; Anshima — gentle ripple on text reveal; Anya — radiant warm sun glow; Manasvi — soft fabric shimmer wave. Reuse/extend existing `TributeAnimations.tsx` components.

**User-visible outcome:** The hero title now animates correctly with all characters flowing inline. A new scroll-driven Tribute Letters section appears on the page, presenting each of the six friends as a beautifully styled letter with their unique ambient background animation, elegant typography, and full heartfelt tribute message.
