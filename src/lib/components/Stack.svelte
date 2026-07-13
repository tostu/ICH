<script lang="ts">
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import londonImg from '$lib/assets/STREET_LONDON_SUNSET.jpg';
	import portraitDoubt from '$lib/assets/PORTRAIT_DOUBT.jpg';
</script>

{#snippet arrow()}
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg
	>
{/snippet}

<!-- eslint-disable svelte/no-at-html-tags -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<section class="bg-surface max-w-measure mx-auto px-6 md:px-14 pt-20 pb-6">
	<div class="max-w-[42rem] mb-9">
		<span class="block font-mono text-[0.72rem] font-medium tracking-[0.2em] uppercase text-warm-deep mb-3.5">{m.stack_label()}</span>
		<h2 class="font-display font-semibold text-[clamp(2.25rem,4.5vw,3.625rem)] leading-[1.05] tracking-[-0.01em] text-on-surface">{@html m.stack_title()}</h2>
		<p class="font-body text-[1.03rem] font-medium leading-[1.6] text-muted mt-4 max-w-[32.5rem]">{m.stack_desc()}</p>
	</div>

	<div class="stack-list flex flex-col gap-[30px]">
		<article class="stack-card relative overflow-hidden rounded-[22px] bg-surface-container-lowest border border-black/10 shadow-[0_3px_14px_rgba(30,43,36,0.07)] grid grid-cols-1 md:grid-cols-[1fr_520px] gap-8 md:gap-[60px] items-center p-7 md:p-[52px_56px]">
			<div class="relative isolate z-[1] flex flex-col items-start gap-[0.85rem]">
				<span class="absolute top-0 right-0 font-display font-semibold text-[clamp(3rem,5vw,6.5rem)] leading-none text-secondary/30 pointer-events-none select-none z-0" aria-hidden="true">01</span>
				<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-warm-deep">{m.stack_card1_idx()}</span>
				<span class="font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-muted">{m.stack_card1_eyebrow()}</span>
				<h3 class="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.1] tracking-[-0.01em] text-warm-deep mt-[0.15rem]">{@html m.stack_card1_title()}</h3>
				<p class="font-body text-[clamp(0.95rem,1.3vw,1.05rem)] font-medium leading-[1.6] text-on-surface-variant max-w-[28rem]">{m.stack_card1_desc()}</p>
				<div class="mt-[0.6rem]">
					<a href={localizeHref('/arbeit')} class="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium tracking-[0.16em] uppercase text-warm-deep cursor-pointer transition-[gap] duration-250 ease-out hover:gap-3.5">
						{m.stack_card1_cta()}
						<div class="w-4 h-4">{@render arrow()}</div>
					</a>
				</div>
			</div>
			<div class="relative z-[1] self-center">
				<div class="absolute inset-[14px_-12px_-12px_14px] bg-secondary rounded-[18px] z-0"></div>
				<div class="relative z-[1]  rounded-[16px] overflow-hidden aspect-[47/36] bg-forest-dark">
					<svg viewBox="0 0 460 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full">
						<defs>
							<pattern id="arch-grid" width="22" height="22" patternUnits="userSpaceOnUse"
								><path
									d="M22 0L0 0 0 22"
									fill="none"
									stroke="rgba(255,255,255,0.04)"
									stroke-width="0.5"
								></path></pattern
							>
							<marker id="arch-a" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"
								><polygon points="0,0 5,2.5 0,5" fill="rgba(232,146,52,0.6)"></polygon></marker
							>
							<marker id="arch-w" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"
								><polygon points="0,0 5,2.5 0,5" fill="rgba(255,255,255,0.2)"></polygon></marker
							>
						</defs>
						<rect width="460" height="400" fill="url(#arch-grid)"></rect>
						<rect
							x="14"
							y="12"
							width="432"
							height="68"
							rx="7"
							fill="rgba(255,255,255,0.04)"
							stroke="rgba(255,255,255,0.1)"
							stroke-width="1"
						></rect>
						<text
							x="22"
							y="30"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.8)"
							font-weight="700"
							letter-spacing="1.5">CLIENT TIER</text
						>
						<rect
							x="22"
							y="37"
							width="90"
							height="28"
							rx="5"
							fill="rgba(255,255,255,0.05)"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="0.75"
						></rect>
						<text
							x="67"
							y="55"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(255,255,255,0.65)"
							text-anchor="middle">Browser</text
						>
						<rect
							x="124"
							y="37"
							width="90"
							height="28"
							rx="5"
							fill="rgba(255,255,255,0.05)"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="0.75"
						></rect>
						<text
							x="169"
							y="55"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(255,255,255,0.65)"
							text-anchor="middle">API Client</text
						>
						<rect
							x="226"
							y="37"
							width="90"
							height="28"
							rx="5"
							fill="rgba(255,255,255,0.05)"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="0.75"
						></rect>
						<text
							x="271"
							y="55"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(255,255,255,0.65)"
							text-anchor="middle">Mobile App</text
						>
						<rect
							x="328"
							y="37"
							width="110"
							height="28"
							rx="13"
							fill="rgba(232,146,52,0.1)"
							stroke="rgba(232,146,52,0.3)"
							stroke-width="0.75"
						></rect>
						<text
							x="383"
							y="55"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.85)"
							text-anchor="middle">REST · gRPC</text
						>
						<line
							x1="230"
							y1="80"
							x2="230"
							y2="104"
							stroke="rgba(232,146,52,0.5)"
							stroke-width="1.5"
							marker-end="url(#arch-a)"
						></line>
						<rect
							x="14"
							y="104"
							width="432"
							height="50"
							rx="7"
							fill="rgba(232,146,52,0.08)"
							stroke="rgba(232,146,52,0.28)"
							stroke-width="1"
						></rect>
						<text
							x="22"
							y="123"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.85)"
							font-weight="700"
							letter-spacing="1.5">API GATEWAY</text
						>
						<text x="22" y="141" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.38)"
							>Rate Limiting · JWT Auth · Load Balancing · Routing</text
						>
						<line
							x1="90"
							y1="154"
							x2="90"
							y2="176"
							stroke="rgba(255,255,255,0.18)"
							stroke-width="1"
							marker-end="url(#arch-w)"
						></line>
						<line
							x1="230"
							y1="154"
							x2="230"
							y2="176"
							stroke="rgba(255,255,255,0.18)"
							stroke-width="1"
							marker-end="url(#arch-w)"
						></line>
						<line
							x1="372"
							y1="154"
							x2="372"
							y2="176"
							stroke="rgba(255,255,255,0.18)"
							stroke-width="1"
							marker-end="url(#arch-w)"
						></line>
						<rect
							x="14"
							y="176"
							width="148"
							height="72"
							rx="7"
							fill="rgba(255,255,255,0.04)"
							stroke="rgba(255,255,255,0.1)"
							stroke-width="1"
						></rect>
						<text
							x="88"
							y="196"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.85)"
							text-anchor="middle"
							font-weight="700">DOMAIN API</text
						>
						<text
							x="88"
							y="212"
							font-family="monospace"
							font-size="7"
							fill="rgba(255,255,255,0.42)"
							text-anchor="middle">Java · Spring Boot</text
						>
						<text
							x="88"
							y="226"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.28)"
							text-anchor="middle">DDD · Hexagonal Arch</text
						>
						<text
							x="88"
							y="239"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)"
							text-anchor="middle">Clean Code · SOLID</text
						>
						<rect
							x="172"
							y="176"
							width="116"
							height="72"
							rx="7"
							fill="rgba(255,255,255,0.04)"
							stroke="rgba(255,255,255,0.1)"
							stroke-width="1"
						></rect>
						<text
							x="230"
							y="196"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.85)"
							text-anchor="middle"
							font-weight="700">EVENT BUS</text
						>
						<text
							x="230"
							y="212"
							font-family="monospace"
							font-size="7"
							fill="rgba(255,255,255,0.42)"
							text-anchor="middle">Kafka · Async</text
						>
						<text
							x="230"
							y="226"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.28)"
							text-anchor="middle">CQRS · Saga</text
						>
						<text
							x="230"
							y="239"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)"
							text-anchor="middle">Event Sourcing</text
						>
						<rect
							x="298"
							y="176"
							width="148"
							height="72"
							rx="7"
							fill="rgba(255,255,255,0.04)"
							stroke="rgba(255,255,255,0.1)"
							stroke-width="1"
						></rect>
						<text
							x="372"
							y="196"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.85)"
							text-anchor="middle"
							font-weight="700">WORKER SVC</text
						>
						<text
							x="372"
							y="212"
							font-family="monospace"
							font-size="7"
							fill="rgba(255,255,255,0.42)"
							text-anchor="middle">Scheduler · Jobs</text
						>
						<text
							x="372"
							y="226"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.28)"
							text-anchor="middle">Retry · Dead Letter Q</text
						>
						<text
							x="372"
							y="239"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)"
							text-anchor="middle">Circuit Breaker</text
						>
						<line x1="88" y1="248" x2="88" y2="268" stroke="rgba(255,255,255,0.12)" stroke-width="1"
						></line>
						<line
							x1="230"
							y1="248"
							x2="230"
							y2="260"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="1"
						></line>
						<line
							x1="88"
							y1="268"
							x2="230"
							y2="268"
							stroke="rgba(255,255,255,0.08)"
							stroke-width="1"
						></line>
						<line
							x1="159"
							y1="268"
							x2="159"
							y2="286"
							stroke="rgba(255,255,255,0.12)"
							stroke-width="1"
							marker-end="url(#arch-w)"
						></line>
						<rect
							x="14"
							y="286"
							width="282"
							height="58"
							rx="7"
							fill="rgba(255,255,255,0.04)"
							stroke="rgba(255,255,255,0.1)"
							stroke-width="1"
						></rect>
						<text
							x="22"
							y="305"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.8)"
							font-weight="700"
							letter-spacing="1.5">DATA LAYER</text
						>
						<text x="22" y="320" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.4)"
							>PostgreSQL · Redis Cache · S3</text
						>
						<text
							x="22"
							y="335"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.22)">ACID · Event Store · CDN</text
						>
						<rect
							x="308"
							y="286"
							width="138"
							height="26"
							rx="6"
							fill="rgba(255,255,255,0.03)"
							stroke="rgba(255,255,255,0.07)"
							stroke-width="0.75"
						></rect>
						<text
							x="377"
							y="303"
							font-family="monospace"
							font-size="7"
							fill="rgba(255,255,255,0.3)"
							text-anchor="middle">Docker · Kubernetes</text
						>
						<rect
							x="308"
							y="318"
							width="138"
							height="26"
							rx="6"
							fill="rgba(255,255,255,0.03)"
							stroke="rgba(255,255,255,0.07)"
							stroke-width="0.75"
						></rect>
						<text
							x="377"
							y="335"
							font-family="monospace"
							font-size="7"
							fill="rgba(255,255,255,0.3)"
							text-anchor="middle">CI/CD · IaC · Linux</text
						>
						<rect
							x="14"
							y="358"
							width="432"
							height="26"
							rx="5"
							fill="rgba(255,255,255,0.02)"
							stroke="rgba(255,255,255,0.05)"
							stroke-width="0.75"
						></rect>
						<text
							x="230"
							y="375"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.18)"
							text-anchor="middle">CLEAN ARCHITECTURE · MILLIONS OF TX · 99.9% UPTIME</text
						>
					</svg>
				</div>
			</div>
		</article>

		<article class="stack-card relative overflow-hidden rounded-[22px] bg-surface-container-lowest border border-black/10 shadow-[0_3px_14px_rgba(30,43,36,0.07)] grid grid-cols-1 md:grid-cols-[520px_1fr] gap-8 md:gap-[60px] items-center p-7 md:p-[52px_56px]">
			<div class="relative isolate z-[1] flex flex-col items-start gap-[0.85rem]">
				<span class="absolute top-0 right-0 font-display font-semibold text-[clamp(3rem,5vw,6.5rem)] leading-none text-primary/30 pointer-events-none select-none z-0" aria-hidden="true">02</span>
				<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-warm-deep">{m.stack_card2_idx()}</span>
				<span class="font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-muted">{m.stack_card2_eyebrow()}</span>
				<h3 class="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.1] tracking-[-0.01em] text-warm-deep mt-[0.15rem]">{@html m.stack_card2_title()}</h3>
				<p class="font-body text-[clamp(0.95rem,1.3vw,1.05rem)] font-medium leading-[1.6] text-on-surface-variant max-w-[28rem]">{m.stack_card2_desc()}</p>
				<div class="mt-[0.6rem]">
					<a href={localizeHref('/fotografie')} class="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium tracking-[0.16em] uppercase text-warm-deep cursor-pointer transition-[gap] duration-250 ease-out hover:gap-3.5">
						{m.stack_card2_cta()}
						<div class="w-4 h-4">{@render arrow()}</div>
					</a>
				</div>
			</div>
			<div class="relative z-[1] self-center md:order-first">
				<div class="absolute inset-[14px_14px_-12px_-12px] bg-primary rounded-[18px] z-0"></div>
				<div class="relative z-[1]  rounded-[16px] overflow-hidden aspect-[47/36] bg-forest-dark">
					<img src={londonImg} alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
				</div>
			</div>
		</article>

		<article class="stack-card relative overflow-hidden rounded-[22px] bg-surface-container-lowest border border-black/10 shadow-[0_3px_14px_rgba(30,43,36,0.07)] grid grid-cols-1 md:grid-cols-[1fr_520px] gap-8 md:gap-[60px] items-center p-7 md:p-[52px_56px]">
			<div class="relative isolate z-[1] flex flex-col items-start gap-[0.85rem]">
				<span class="absolute top-0 right-0 font-display font-semibold text-[clamp(3rem,5vw,6.5rem)] leading-none text-secondary/30 pointer-events-none select-none z-0" aria-hidden="true">03</span>
				<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-warm-deep">{m.stack_card3_idx()}</span>
				<span class="font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-muted">{m.stack_card3_eyebrow()}</span>
				<h3 class="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.1] tracking-[-0.01em] text-warm-deep mt-[0.15rem]">{@html m.stack_card3_title()}</h3>
				<p class="font-body text-[clamp(0.95rem,1.3vw,1.05rem)] font-medium leading-[1.6] text-on-surface-variant max-w-[28rem]">{m.stack_card3_desc()}</p>
				<div class="mt-[0.6rem]">
					<a href={localizeHref('/arbeit')} class="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium tracking-[0.16em] uppercase text-warm-deep cursor-pointer transition-[gap] duration-250 ease-out hover:gap-3.5">
						{m.stack_card3_cta()}
						<div class="w-4 h-4">{@render arrow()}</div>
					</a>
				</div>
			</div>
			<div class="relative z-[1] self-center">
				<div class="absolute inset-[14px_-12px_-12px_14px] bg-secondary rounded-[18px] z-0"></div>
				<div class="relative z-[1]  rounded-[16px] overflow-hidden aspect-[47/36] bg-forest-dark">
					<svg viewBox="0 0 460 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute inset-0 w-full h-full">
						<defs>
							<pattern id="proj-grid" width="22" height="22" patternUnits="userSpaceOnUse"
								><path
									d="M22 0L0 0 0 22"
									fill="none"
									stroke="rgba(232,146,52,0.07)"
									stroke-width="0.5"
								></path></pattern
							>
						</defs>
						<rect width="460" height="400" fill="url(#proj-grid)"></rect>
						<text
							x="22"
							y="36"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(232,146,52,0.8)"
							font-weight="700"
							letter-spacing="1.5">BAUSTELLEN STATUS</text
						>
						<line
							x1="22"
							y1="46"
							x2="438"
							y2="46"
							stroke="rgba(232,146,52,0.15)"
							stroke-width="0.75"
						></line>
						<text
							x="22"
							y="78"
							font-family="monospace"
							font-size="10"
							fill="rgba(255,255,255,0.85)"
							font-weight="700">WOHIN</text
						>
						<circle cx="102" cy="74" r="4.5" fill="#E09F3E"></circle>
						<text
							x="114"
							y="78"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(224,159,62,0.85)">SLOW</text
						>
						<text
							x="438"
							y="78"
							font-family="monospace"
							font-size="9"
							fill="rgba(232,146,52,0.9)"
							text-anchor="end">50%</text
						>
						<rect x="22" y="86" width="416" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"
						></rect>
						<rect x="22" y="86" width="208" height="5" rx="2.5" fill="#E89234" opacity="0.8"></rect>
						<text x="22" y="102" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.32)"
							>Flutter · Hono · Astro · Sanity</text
						>
						<text
							x="22"
							y="116"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)">Backend fertig — App-Neustart nach Flutter-Wechsel</text
						>
						<line
							x1="22"
							y1="130"
							x2="438"
							y2="130"
							stroke="rgba(255,255,255,0.06)"
							stroke-width="0.75"
						></line>
						<text
							x="22"
							y="160"
							font-family="monospace"
							font-size="10"
							fill="rgba(255,255,255,0.85)"
							font-weight="700">WELCHE PARTEI?</text
						>
						<circle cx="186" cy="156" r="4.5" fill="#4CD964"></circle>
						<text
							x="198"
							y="160"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(76,217,100,0.85)">FAST FERTIG</text
						>
						<text
							x="438"
							y="160"
							font-family="monospace"
							font-size="9"
							fill="rgba(232,146,52,0.9)"
							text-anchor="end">92%</text
						>
						<rect x="22" y="168" width="416" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"
						></rect>
						<rect x="22" y="168" width="383" height="5" rx="2.5" fill="#4CD964" opacity="0.65"
						></rect>
						<text x="22" y="184" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.32)"
							>Svelte 5 · SvelteKit · D3.js · Playwright</text
						>
						<text
							x="22"
							y="198"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)">Feintuning wie echte Koalitionsverhandlungen</text
						>
						<line
							x1="22"
							y1="212"
							x2="438"
							y2="212"
							stroke="rgba(255,255,255,0.06)"
							stroke-width="0.75"
						></line>
						<text
							x="22"
							y="242"
							font-family="monospace"
							font-size="10"
							fill="rgba(255,255,255,0.85)"
							font-weight="700">SOFA-SHOWDOWN</text
						>
						<circle cx="202" cy="238" r="4.5" fill="#D62246"></circle>
						<text
							x="214"
							y="242"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(214,34,70,0.85)">KONZEPT</text
						>
						<text
							x="438"
							y="242"
							font-family="monospace"
							font-size="9"
							fill="rgba(255,255,255,0.28)"
							text-anchor="end">0%</text
						>
						<rect x="22" y="250" width="416" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"
						></rect>
						<rect
							x="22"
							y="250"
							width="416"
							height="5"
							rx="2.5"
							fill="none"
							stroke="rgba(214,34,70,0.2)"
							stroke-width="0.75"
							stroke-dasharray="8 5"
						></rect>
						<text x="22" y="266" font-family="monospace" font-size="7" fill="rgba(255,255,255,0.32)"
							>Party Game · Smartphone als Controller</text
						>
						<text
							x="22"
							y="280"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.2)">Konzeptionsphase mit gutem Freund</text
						>
						<line
							x1="22"
							y1="300"
							x2="438"
							y2="300"
							stroke="rgba(232,146,52,0.12)"
							stroke-width="0.75"
						></line>
						<text
							x="22"
							y="326"
							font-family="monospace"
							font-size="7.5"
							fill="rgba(255,255,255,0.28)">3 Projekte · Ø 47% Fortschritt · ∞ Baujahre</text
						>
						<text
							x="22"
							y="346"
							font-family="monospace"
							font-size="6.5"
							fill="rgba(255,255,255,0.15)">last commit: irgendwann</text
						>
						<circle
							cx="400"
							cy="345"
							r="36"
							fill="none"
							stroke="rgba(232,146,52,0.06)"
							stroke-width="0.75"
						></circle>
						<circle
							cx="400"
							cy="345"
							r="22"
							fill="none"
							stroke="rgba(232,146,52,0.06)"
							stroke-width="0.75"
						></circle>
						<circle cx="400" cy="345" r="4" fill="rgba(232,146,52,0.35)"></circle>
						<line
							x1="400"
							y1="305"
							x2="400"
							y2="321"
							stroke="rgba(232,146,52,0.12)"
							stroke-width="0.75"
						></line>
						<line
							x1="400"
							y1="369"
							x2="400"
							y2="385"
							stroke="rgba(232,146,52,0.12)"
							stroke-width="0.75"
						></line>
						<line
							x1="360"
							y1="345"
							x2="376"
							y2="345"
							stroke="rgba(232,146,52,0.12)"
							stroke-width="0.75"
						></line>
						<line
							x1="424"
							y1="345"
							x2="440"
							y2="345"
							stroke="rgba(232,146,52,0.12)"
							stroke-width="0.75"
						></line>
						<text
							x="400"
							y="301"
							font-family="monospace"
							font-size="6"
							fill="rgba(232,146,52,0.25)"
							text-anchor="middle">N</text
						>
					</svg>
				</div>
			</div>
		</article>

		<article class="stack-card relative overflow-hidden rounded-[22px] bg-surface-container-lowest border border-black/10 shadow-[0_3px_14px_rgba(30,43,36,0.07)] grid grid-cols-1 md:grid-cols-[520px_1fr] gap-8 md:gap-[60px] items-center p-7 md:p-[52px_56px]">
			<div class="relative isolate z-[1] flex flex-col items-start gap-[0.85rem]">
				<span class="absolute top-0 right-0 font-display font-semibold text-[clamp(3rem,5vw,6.5rem)] leading-none text-primary/30 pointer-events-none select-none z-0" aria-hidden="true">04</span>
				<span class="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-warm-deep">{m.stack_card4_idx()}</span>
				<span class="font-body text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-muted">{m.stack_card4_eyebrow()}</span>
				<h3 class="font-display font-semibold text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.1] tracking-[-0.01em] text-warm-deep mt-[0.15rem]">{@html m.stack_card4_title()}</h3>
				<p class="font-body text-[clamp(0.95rem,1.3vw,1.05rem)] font-medium leading-[1.6] text-on-surface-variant max-w-[28rem]">{m.stack_card4_desc()}</p>
				<div class="mt-[0.6rem]">
					<a href={localizeHref('/ueber')} class="inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium tracking-[0.16em] uppercase text-warm-deep cursor-pointer transition-[gap] duration-250 ease-out hover:gap-3.5">
						{m.stack_card4_cta()}
						<div class="w-4 h-4">{@render arrow()}</div>
					</a>
				</div>
			</div>
			<div class="relative z-[1] self-center md:order-first">
				<div class="absolute inset-[14px_14px_-12px_-12px] bg-primary rounded-[18px] z-0"></div>
				<div class="relative z-[1]  rounded-[16px] overflow-hidden aspect-[47/36] bg-forest-dark">
					<img src={portraitDoubt} alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
				</div>
			</div>
		</article>
	</div>
</section>

<style>
	h2 :global(em) {
		font-style: italic;
		color: var(--primary);
	}

	/* Sticky stacking: each card pins below the nav and the next one
	   scrolls up over it, leaving a peeking sliver of the ones below. */
	.stack-list {
		--stack-top: 96px;
		--stack-peek: 22px;
	}

	.stack-card {
		position: sticky;
		top: var(--stack-top);
		transform-origin: center top;
		will-change: transform;
	}

	.stack-card:nth-child(1) {
		top: var(--stack-top);
	}
	.stack-card:nth-child(2) {
		top: calc(var(--stack-top) + var(--stack-peek));
	}
	.stack-card:nth-child(3) {
		top: calc(var(--stack-top) + var(--stack-peek) * 2);
	}
	.stack-card:nth-child(4) {
		top: calc(var(--stack-top) + var(--stack-peek) * 3);
	}

	/* Scroll-driven depth: shrink + dim a card as it gets covered. */
	@supports (animation-timeline: view()) {
		.stack-card {
			animation: stack-recede linear both;
			animation-timeline: view();
			animation-range: exit-crossing 0% exit-crossing 90%;
		}

		@keyframes stack-recede {
			to {
				transform: scale(0.94);
				filter: brightness(0.92);
			}
		}

		/* Last card has nothing stacking over it — keep it flat. */
		.stack-card:last-child {
			animation: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stack-card {
			position: static;
			animation: none;
			transform: none;
			filter: none;
		}
	}
</style>
