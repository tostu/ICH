<script lang="ts">
  import { SvelteFlow, Background, BackgroundVariant, type Node, type Edge } from '@xyflow/svelte';
  import DomainNode from './flow/DomainNode.svelte';
  import * as m from '$lib/paraglide/messages';

  const nodeTypes = { domain: DomainNode };

  let nodes = $state.raw<Node[]>([
    {
      id: 'arch',
      type: 'domain',
      position: { x: 310, y: 10 },
      data: { icon: '◈', label: 'System-Architektur', desc: 'Hexagonal · DDD · Clean Architecture' },
    },
    {
      id: 'be',
      type: 'domain',
      position: { x: 40, y: 190 },
      data: { icon: '⚙', label: 'Backend', desc: 'Java · Spring Boot · Kafka' },
    },
    {
      id: 'fe',
      type: 'domain',
      position: { x: 580, y: 190 },
      data: { icon: '◐', label: 'Frontend', desc: 'Svelte · React · TypeScript' },
    },
    {
      id: 'data',
      type: 'domain',
      position: { x: 130, y: 360 },
      data: { icon: '⛁', label: 'Daten', desc: 'PostgreSQL · Redis · S3' },
    },
    {
      id: 'infra',
      type: 'domain',
      position: { x: 490, y: 360 },
      data: { icon: '☁', label: 'Infrastruktur', desc: 'Docker · K8s · CI/CD' },
    },
  ]);

  let edges = $state.raw<Edge[]>([
    { id: 'e-arch-be', source: 'arch', target: 'be', animated: true, style: 'stroke:var(--secondary);stroke-width:1.5', markerEnd: { type: 'arrowclosed', color: 'var(--secondary)' } },
    { id: 'e-arch-fe', source: 'arch', target: 'fe', animated: true, style: 'stroke:var(--secondary);stroke-width:1.5', markerEnd: { type: 'arrowclosed', color: 'var(--secondary)' } },
    { id: 'e-arch-infra', source: 'arch', target: 'infra', animated: true, style: 'stroke:var(--secondary);stroke-width:1.5', markerEnd: { type: 'arrowclosed', color: 'var(--secondary)' } },
    { id: 'e-be-data', source: 'be', target: 'data', style: 'stroke:var(--outline-variant);stroke-width:1', markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' } },
    { id: 'e-fe-infra', source: 'fe', target: 'infra', style: 'stroke:var(--outline-variant);stroke-width:1', markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' } },
    { id: 'e-data-infra', source: 'data', target: 'infra', style: 'stroke:var(--outline-variant);stroke-width:1;stroke-dasharray:4 4', markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' } },
  ]);

  const workProjects = [
    {
      id: 'agri-platform',
      role: 'Software-Architekt',
      title: 'Agrar-Marktplatz Plattform',
      desc: 'Skalierbare E-Commerce-Plattform für die Agrarindustrie — Microservices, Event-getrieben, ~2 Mio. monatliche Transaktionen.',
      tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes'],
      period: '2022–heute',
    },
    {
      id: 'fintech-engine',
      role: 'Senior Backend Engineer',
      title: 'Finanzdienstleistungs-Engine',
      desc: 'Kernsystem für ein Fintech: Transaction-Processing, Regulatory-Reporting, Settlement. Hexagonale Architektur, 99.9% Uptime über 4 Jahre.',
      tech: ['Java', 'Spring Boot', 'Event Sourcing', 'CQRS', 'AWS'],
      period: '2018–2022',
    },
    {
      id: 'logistics-hub',
      role: 'Backend Engineer',
      title: 'Logistik-Routing-Hub',
      desc: 'Echtzeit-Routing-Engine für tausende Touren pro Minute. Dynamische Disposition, Telematik-Integration, +30% Effizienz.',
      tech: ['Java', 'Spring Boot', 'Redis', 'MongoDB', 'Docker'],
      period: '2015–2018',
    },
  ];

  const caseStudies = [
    {
      id: 'migration',
      number: '01',
      title: 'Monolith → Microservices',
      problem: 'Monolith mit 800k LOC, Release-Zyklus 3 Monate, jeder Deploy ein Risiko.',
      solution: 'Strangler-Fig-Pattern, DDD-Bounded-Contexts, Event-Migration der Daten.',
      result: 'Releases alle 2 Wochen, Fehlerquote −80%, Deploy 4h → 12min.',
      tags: ['Migration', 'Architektur'],
    },
    {
      id: 'performance',
      number: '02',
      title: 'Latenz unter 50ms',
      problem: 'Search-Endpoint brauchte 2.3s bei Spitzenlast — blockierte geplantes Realzeit-Feature.',
      solution: 'Query-Optimierung, Redis-Caching, CDN, Index-Restrukturierung, Pool-Tuning.',
      result: 'P95-Latenz 2.1s → 45ms. Datenbank-Last −70%.',
      tags: ['Performance', 'Optimierung'],
    },
    {
      id: 'audit',
      number: '03',
      title: 'System-Audit & Härtung',
      problem: 'Bestandssystem mit sporadischen Ausfällen unter Last — Ursache nicht reproduzierbar.',
      solution: 'Thread-Dumps, Heap-Analyse, APM-Tracing, Chaos-Engineering, Load-Tests.',
      result: '7 Race-Conditions gefunden, Connection-Leak gefixt, Resilience nachgerüstet.',
      tags: ['Audit', 'Resilience'],
    },
  ];
</script>

<!-- ─── 1. DOMÄNEN-FLOW (SvelteFlow) ─── -->
<section class="radar section-pad">
  <div class="radar__inner">
    <div class="reveal">
      <span class="label-lg text-secondary">{m.expertise_label ? m.expertise_label() : 'Meine Domänen'}</span>
      <h2 class="display-md radar__title">Werkzeuge & <em>Territorien.</em></h2>
      <p class="body-md radar__desc">
        Fünf Domänen, ein Handwerk — vom Architektur-Entwurf bis zur Betriebs-Härtung.
      </p>
    </div>

    <div class="flow-wrapper reveal">
      <SvelteFlow
        bind:nodes
        bind:edges
        {nodeTypes}
        fitView
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        nodesDraggable={true}
        nodesFocusable={false}
        edgesFocusable={false}
        elementsSelectable={false}
        colorMode="light"
        class="!bg-[--surface-container-low] flow-canvas"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
      </SvelteFlow>
    </div>
  </div>
</section>

<!-- ─── 2. PROJEKTE ─── -->
<section class="proj section-pad">
  <div class="proj__inner">
    <div class="proj__header reveal">
      <span class="label-lg text-secondary">Berufliche Projekte</span>
      <h2 class="display-md proj__title">Was ich <em>bewegt</em> habe.</h2>
      <p class="body-md proj__desc">
        Von der Konzeption bis zum produktiven Betrieb — eine Auswahl der Systeme, die ich verantwortet habe.
      </p>
    </div>

    <div class="proj__list">
      {#each workProjects as p, i (p.id)}
        <article class="proj__card reveal">
          <div class="proj__side">
            <span class="proj__dot" style:--dot-bg={i === 0 ? 'var(--primary)' : i === 1 ? 'var(--secondary)' : 'var(--accent)'}></span>
            <span class="proj__line" aria-hidden="true"></span>
          </div>
          <div class="proj__body">
            <div class="proj__meta">
              <span class="proj__role">{p.role}</span>
              <span class="proj__period">{p.period}</span>
            </div>
            <h3 class="headline-md">{p.title}</h3>
            <p class="body-md proj__desc-text">{p.desc}</p>
            <div class="proj__tech">
              {#each p.tech as t (t)}
                <span class="proj__badge">{t}</span>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- ─── 3. CASE STUDIES ─── -->
<section class="cases section-pad pattern-blueprint-grid">
  <div class="cases__inner">
    <div class="cases__header reveal">
      <span class="label-lg text-secondary">Fallstudien</span>
      <h2 class="display-md cases__title">Probleme. Ansätze. <em>Ergebnisse.</em></h2>
      <p class="body-md cases__desc">
        Drei exemplarische Herausforderungen — vom Monolithen bis zur Mikrosekunde.
      </p>
    </div>

    <div class="cases__list">
      {#each caseStudies as cs (cs.id)}
        <article class="cases__card reveal">
          <div class="cases__top">
            <span class="cases__num">{cs.number}</span>
            <div class="cases__tags">
              {#each cs.tags as tag (tag)}
                <span class="cases__tag">{tag}</span>
              {/each}
            </div>
          </div>
          <h3 class="headline-md cases__card-title">{cs.title}</h3>
          <div class="cases__grid">
            <div class="cases__block">
              <span class="cases__label">Problem</span>
              <p>{cs.problem}</p>
            </div>
            <div class="cases__block">
              <span class="cases__label">Ansatz</span>
              <p>{cs.solution}</p>
            </div>
            <div class="cases__block cases__block--result">
              <span class="cases__label">Ergebnis</span>
              <p>{cs.result}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  :global(.svelte-flow) {
    --xy-node-border-default: 1px solid var(--surface-container-high);
    --xy-node-background-color-default: var(--surface-container-lowest);
    --xy-handle-background-color-default: var(--secondary);
    --xy-edge-stroke-default: var(--outline-variant);
    --xy-edge-stroke-selected-default: var(--secondary);
    --xy-connectionline-stroke-default: var(--secondary);
  }

  :global(.flow-canvas) {
    min-height: 480px;
  }

  .radar {
    background: var(--surface);
  }

  .radar__inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .radar__title {
    margin-top: var(--space-xs);
    color: var(--primary);
  }

  .radar__title :global(em) {
    font-style: italic;
    color: var(--secondary);
  }

  .radar__desc {
    color: var(--on-surface-variant);
    margin-top: var(--space-sm);
    max-width: 36rem;
  }

  .flow-wrapper {
    margin-top: var(--space-xl);
    border: 1px solid var(--surface-container-high);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .proj {
    background: var(--surface-container-low);
    border-top: 1px solid var(--surface-container);
    border-bottom: 1px solid var(--surface-container);
  }

  .proj__inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .proj__title {
    margin-top: var(--space-xs);
    color: var(--primary);
  }

  .proj__title :global(em) {
    font-style: italic;
    color: var(--secondary);
  }

  .proj__desc {
    color: var(--on-surface-variant);
    margin-top: var(--space-sm);
    max-width: 36rem;
  }

  .proj__list {
    margin-top: var(--space-xl);
    display: flex;
    flex-direction: column;
  }

  .proj__card {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: var(--space-md);
    padding: var(--space-md) 0;
  }

  .proj__side {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .proj__dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--dot-bg, var(--primary));
    opacity: 0.65;
    flex-shrink: 0;
    z-index: 1;
  }

  .proj__line {
    position: absolute;
    top: 18px;
    bottom: -1px;
    width: 1px;
    background: var(--outline-variant);
    opacity: 0.4;
  }

  .proj__card:last-child .proj__line {
    display: none;
  }

  .proj__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--surface-container);
  }

  .proj__card:last-child .proj__body {
    border-bottom: none;
  }

  .proj__meta {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
  }

  .proj__role {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary);
    font-weight: 600;
  }

  .proj__period {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    color: var(--muted);
  }

  .proj__desc-text {
    color: var(--on-surface-variant);
    max-width: 48rem;
  }

  .proj__tech {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .proj__badge {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    padding: 0.2rem 0.5rem;
    background: var(--surface-container);
    color: var(--on-surface-variant);
    border-radius: var(--radius);
    border: 1px solid var(--surface-container-high);
  }

  .cases {
    background: var(--surface);
    border-bottom: 1px solid var(--surface-container);
  }

  .cases__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .cases__title {
    margin-top: var(--space-xs);
    color: var(--primary);
  }

  .cases__title :global(em) {
    font-style: italic;
    color: var(--secondary);
  }

  .cases__desc {
    color: var(--on-surface-variant);
    margin-top: var(--space-sm);
    max-width: 36rem;
  }

  .cases__list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    margin-top: var(--space-xl);
  }

  .cases__card {
    background: var(--surface-container-lowest);
    border: 1px solid var(--surface-container-high);
    border-radius: var(--radius);
    padding: var(--space-md);
  }

  .cases__card:hover {
    border-color: var(--outline-variant);
  }

  .cases__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xs);
  }

  .cases__num {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 800;
    color: var(--tertiary-fixed);
    line-height: 1;
    opacity: 0.45;
  }

  .cases__tags {
    display: flex;
    gap: 6px;
  }

  .cases__tag {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.25rem 0.6rem;
    background: color-mix(in srgb, var(--tertiary-fixed) 15%, transparent);
    color: var(--primary);
    border-radius: var(--radius);
  }

  .cases__card-title {
    color: var(--on-surface);
    margin-bottom: var(--space-sm);
  }

  .cases__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--space-md);
  }

  .cases__block p {
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--on-surface-variant);
  }

  .cases__label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
  }

  .cases__block--result p {
    color: var(--primary);
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    .cases__grid {
      grid-template-columns: 1fr;
      gap: var(--space-sm);
    }

    :global(.flow-canvas) {
      min-height: 360px;
    }
  }

  @media (max-width: 640px) {
    :global(.flow-canvas) {
      min-height: 300px;
    }
  }
</style>
