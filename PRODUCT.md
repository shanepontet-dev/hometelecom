# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (confirmed with user — no build step, easy to host anywhere)

## Users

People moving home in the UK — tenants, homeowners, and landlords/letting agents on their behalf — who need to set up broadband, energy, council tax & water, a mobile SIM, and/or Sky TV quickly around a move-in date.

## Product Purpose

A concierge service that sets up multiple household services — broadband, energy, council tax & water, mobile SIMs, Sky TV — through recognised big-name providers in one call or online session, removing the hassle of contacting each utility separately when moving home. Success is a customer who is fully connected before or shortly after move-in without having chased five different companies.

## Positioning

Unlike a single-category comparison site, this bundles broadband + energy + council tax/water + SIM + Sky TV switching into one relationship, with UK-based human support and contracts flexible enough to match a tenancy (from 6 months, no settlement fees if the customer moves again) rather than locking customers to the provider's preferred terms.

## Operating Context

Customers typically engage around a house move (new tenancy, purchase completion) or a landlord/letting agent arranging setup on a tenant's behalf. Entry points are a phone call (01403 216131), a postcode/availability checker, or an agent referral. After sign-up, customers manage their account (orders, bills, deals, support) through a companion app. Support is UK-based and phone-first.

## Capabilities and Constraints

This build is a visual/demo rebuild, not a functional replacement (confirmed with user): the postcode checker, "Book a call," account login, and checkout flows are styled UI only and are not wired to a live backend, pricing feed, or CRM. Content is sourced from the live hometelecom.co.uk site (captured verbatim/paraphrased in this session) — no fabricated pricing, testimonials, or claims beyond what was sourced. No animal imagery (explicit user constraint). Logo is a typographic wordmark only — no icon/logo mark (explicit user constraint). The old site's colour palette is explicitly not inherited — new-work defines a new palette.

## Brand Commitments

- Name: "Home Telecom" — wordmark only, no icon.
- Phone: 01403 216131.
- Company registration: 07412021.
- Confirmed partner network referenced in copy: Vodafone, TalkTalk, Virgin Media O2, Sky, BT Wholesale, CityFibre, FullFibre, Freedom Fibre, KCOM, F&W Networks, MS3, British Gas, E.ON, Bunch.

## Evidence on Hand

Live-site copy captured this session: hero messaging, all five service sections (Broadband, Energy, Council Tax & Water, SIMs, Sky TV), "How it works" steps, the five-point "Home Telecom promise," trust stats (19,000+ customers, ~28 years trading, 100% UK-based support), an executive quote attributed to Sasha Barnett (Chief Service Officer), industry-recognition mentions (Channel Champions finalist 2024, Fibre Awards Finalist 2025, Dynamic Awards – Highly Commended, among others), and footer/legal structure. No customer names/quotes beyond the sourced exec quote were supplied — the build must not fabricate customer testimonials or additional named quotes. The user supplied one real photograph (a blue-sky-with-clouds stock-style image) at `assets/images/hero-sky.jpg`, used as the literal hero background; its rights/licensing are unconfirmed (it has the look of a stock photo), so it's flagged for the user to swap for a licensed asset before this goes on a real public site. Real partner-network logos, industry-award badges, and official App Store/Google Play badges were pulled directly from the live hometelecom.co.uk site's own asset host (`assets/logos/`, `assets/awards/`, `assets/badges/`) and verified against the rendered raw HTML — all copy, pricing (e.g. SIM from £10.99/mo), and trust stats (19,000+ customers, 28yrs since 1998, 100% UK support) were cross-checked against the live site's raw markup in this session and matched. The live site's own product photography is animal-mascot themed (cats/dogs in glasses) throughout, including in the slot this rebuild uses for a lifestyle photo (energy section) — none of it was used, per the explicit no-animal-imagery constraint. The energy-section lifestyle photo (`assets/images/energy-lifestyle.jpg`) is now filled: "Smiling Senior Older Woman Sitting on the Sofa" by Stannah International, sourced via the Openverse API (openverse.org, which indexes Flickr/CC-licensed work), licensed CC BY 2.0. Required attribution: "Smiling Senior Older Woman Sitting on the Sofa" by Stannah International is licensed under CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), original at https://www.flickr.com/photos/164316313@N02/28078722118. Unsplash and Pexels were tried first and abandoned (anti-bot walls blocked automated access); no image was fabricated or used without a verifiable license.

Three more photos were sourced via the same Openverse workflow for the nav mega-menu cards (Broadband → Tenants/Homeowners, Utilities → Home essentials/Mobile & entertainment), after roughly a dozen search queries returned mostly irrelevant or unusably dated results — these three were the ones that cleared both the license check and a visual quality bar (real people, modern staging, no animals). All verified directly against their Flickr source pages, not just the API response:
- `assets/images/mega-tenant.jpg` — "Efficient Remote Work on Comfortable Sofa" by userpilot1, licensed CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), original at https://www.flickr.com/photos/198537127@N06/52974060606.
- `assets/images/mega-homeowner.jpg` — "Senior couple talking to relatives on online conference call" by EU-Ukraine cooperation, licensed **CC BY-SA 2.0** (https://creativecommons.org/licenses/by-sa/2.0/), original at https://www.flickr.com/photos/149400054@N04/54438985179. Note the ShareAlike term (stricter than the CC BY images elsewhere on this site) — this photo, cropped/resized, must stay available under CC BY-SA 2.0 if redistributed.
- `assets/images/mega-mobile-entertainment.jpg` — "Young woman taking a selfie while holding a vinyl record and relaxing on the floor in a cozy living room" by nenadstojkovicart, licensed CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), original at https://www.flickr.com/photos/202846129@N03/54562388520.

As with the hero and energy photos, none of these have on-page photographer credit (matching this project's existing pattern of recording attribution here rather than in the UI), worth a proper credits line before this goes on a real public site.

Two more were sourced the same way when Contact us was merged into a Customer area mega-menu. Searches for a distinct "customer on the phone" scene kept returning either irrelevant results or generic white-background call-center stock photography that would have clashed with the real-environment photography used everywhere else on this site, so both final picks are different crops of the same verified userpilot1 shoot already used for the Broadband/Tenants card, chosen specifically for different poses (hands on laptop vs. phone raised to the ear) so the two cards read as distinct next to each other. Flagged here rather than hidden:
- `assets/images/mega-account.jpg` — "Efficient Remote Work on Comfortable Sofa" by userpilot1, licensed CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), original at https://www.flickr.com/photos/198537127@N06/52974430665.
- `assets/images/mega-support.jpg` — "Efficient Remote Work on Comfortable Sofa" by userpilot1, licensed CC BY 2.0 (https://creativecommons.org/licenses/by/2.0/), original at https://www.flickr.com/photos/198537127@N06/52974204474.

## Product Principles

1. One relationship, many providers — never make the customer feel like they're juggling five separate companies.
2. Move-day urgency — design for someone who needs this sorted fast, not browsed at leisure.
3. Human backup always visible — the UK-based phone line is a trust anchor shown throughout, not buried as a last resort.
4. Flexibility over lock-in — contracts are framed as matching the customer's tenancy, not the provider's convenience.
5. Trust through evidence — real numbers (19,000+ customers, Trustpilot volume, ~28 years trading) carry more weight than adjectives.
