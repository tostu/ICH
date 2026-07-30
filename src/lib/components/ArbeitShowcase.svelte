<script lang="ts">
	import { SvelteFlow, Background, BackgroundVariant, type Node, type Edge } from '@xyflow/svelte';
	import DomainNode from './flow/DomainNode.svelte';
	import Section from './ui/Section.svelte';
	import SectionHead from './ui/SectionHead.svelte';
	import Card from './ui/Card.svelte';
	import TechBadge from './ui/TechBadge.svelte';
	import * as m from '$lib/paraglide/messages';

	const nodeTypes = { domain: DomainNode };

	let nodes = $state.raw<Node[]>([
		{
			id: 'arch',
			type: 'domain',
			position: { x: 310, y: 10 },
			data: {
				icon: '◈',
				label: m.arbeit_node_arch_label(),
				desc: 'Hexagonal · DDD · Clean Architecture'
			}
		},
		{
			id: 'be',
			type: 'domain',
			position: { x: 40, y: 190 },
			data: { icon: '⚙', label: m.arbeit_node_be_label(), desc: 'Java · Spring Boot · Kafka' }
		},
		{
			id: 'fe',
			type: 'domain',
			position: { x: 580, y: 190 },
			data: { icon: '◐', label: m.arbeit_node_fe_label(), desc: 'Svelte · React · TypeScript' }
		},
		{
			id: 'data',
			type: 'domain',
			position: { x: 130, y: 360 },
			data: { icon: '⛁', label: m.arbeit_node_data_label(), desc: 'PostgreSQL · Redis · S3' }
		},
		{
			id: 'infra',
			type: 'domain',
			position: { x: 490, y: 360 },
			data: { icon: '☁', label: m.arbeit_node_infra_label(), desc: 'Docker · K8s · CI/CD' }
		}
	]);

	const flowEdge = 'stroke:var(--color-warm-deep);stroke-width:1.5';
	const flowEdgeMuted = 'stroke:var(--outline-variant);stroke-width:1';

	let edges = $state.raw<Edge[]>([
		{
			id: 'e-arch-be',
			source: 'arch',
			target: 'be',
			animated: true,
			style: flowEdge,
			markerEnd: { type: 'arrowclosed', color: 'var(--color-warm-deep)' }
		},
		{
			id: 'e-arch-fe',
			source: 'arch',
			target: 'fe',
			animated: true,
			style: flowEdge,
			markerEnd: { type: 'arrowclosed', color: 'var(--color-warm-deep)' }
		},
		{
			id: 'e-arch-infra',
			source: 'arch',
			target: 'infra',
			animated: true,
			style: flowEdge,
			markerEnd: { type: 'arrowclosed', color: 'var(--color-warm-deep)' }
		},
		{
			id: 'e-be-data',
			source: 'be',
			target: 'data',
			style: flowEdgeMuted,
			markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' }
		},
		{
			id: 'e-fe-infra',
			source: 'fe',
			target: 'infra',
			style: flowEdgeMuted,
			markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' }
		},
		{
			id: 'e-data-infra',
			source: 'data',
			target: 'infra',
			style: `${flowEdgeMuted};stroke-dasharray:4 4`,
			markerEnd: { type: 'arrowclosed', color: 'var(--outline-variant)' }
		}
	]);

	const workProjects = [
		{
			id: 'agri-platform',
			number: '01',
			role: m.arbeit_proj_agri_role(),
			title: m.arbeit_proj_agri_title(),
			desc: m.arbeit_proj_agri_desc(),
			tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Kubernetes'],
			period: m.arbeit_proj_agri_period()
		},
		{
			id: 'fintech-engine',
			number: '02',
			role: m.arbeit_proj_fintech_role(),
			title: m.arbeit_proj_fintech_title(),
			desc: m.arbeit_proj_fintech_desc(),
			tech: ['Java', 'Spring Boot', 'Event Sourcing', 'CQRS', 'AWS'],
			period: m.arbeit_proj_fintech_period()
		},
		{
			id: 'logistics-hub',
			number: '03',
			role: m.arbeit_proj_logistics_role(),
			title: m.arbeit_proj_logistics_title(),
			desc: m.arbeit_proj_logistics_desc(),
			tech: ['Java', 'Spring Boot', 'Redis', 'MongoDB', 'Docker'],
			period: m.arbeit_proj_logistics_period()
		}
	];

	const caseStudies = [
		{
			id: 'migration',
			number: '01',
			title: m.arbeit_case_migration_title(),
			problem: m.arbeit_case_migration_problem(),
			solution: m.arbeit_case_migration_solution(),
			result: m.arbeit_case_migration_result(),
			tags: [m.arbeit_case_migration_tag1(), m.arbeit_case_migration_tag2()]
		},
		{
			id: 'performance',
			number: '02',
			title: m.arbeit_case_performance_title(),
			problem: m.arbeit_case_performance_problem(),
			solution: m.arbeit_case_performance_solution(),
			result: m.arbeit_case_performance_result(),
			tags: [m.arbeit_case_performance_tag1(), m.arbeit_case_performance_tag2()]
		},
		{
			id: 'audit',
			number: '03',
			title: m.arbeit_case_audit_title(),
			problem: m.arbeit_case_audit_problem(),
			solution: m.arbeit_case_audit_solution(),
			result: m.arbeit_case_audit_result(),
			tags: [m.arbeit_case_audit_tag1(), m.arbeit_case_audit_tag2()]
		}
	];
</script>

<!-- ─── 1. DOMÄNEN-FLOW ─── -->
<Section class="pt-12 pb-2">
	<div class="reveal">
		<SectionHead
			label={m.arbeit_domains_label()}
			title={m.arbeit_domains_title()}
			desc={m.arbeit_domains_desc()}
		/>
	</div>

	<div class="reveal">
		<Card pad="none" class="overflow-hidden">
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
				class="flow-canvas"
			>
				<Background variant={BackgroundVariant.Dots} gap={20} size={1} />
			</SvelteFlow>
		</Card>
	</div>
</Section>

<!-- ─── 2. PROJEKTE ─── -->
<Section class="pt-16 pb-2">
	<div class="reveal">
		<SectionHead
			label={m.arbeit_projects_label()}
			title={m.arbeit_projects_title()}
			desc={m.arbeit_projects_desc()}
		/>
	</div>

	<div class="flex flex-col gap-6">
		{#each workProjects as p (p.id)}
			<div class="reveal">
				<Card pad="md" interactive class="relative isolate overflow-hidden">
					<span
						class="pointer-events-none absolute top-4 right-6 -z-10 font-display text-[clamp(3rem,5vw,5.5rem)] leading-none font-semibold text-primary/15 select-none"
						aria-hidden="true">{p.number}</span
					>
					<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
						<span
							class="font-mono text-[0.7rem] font-medium tracking-[0.16em] text-warm-deep uppercase"
							>{p.role}</span
						>
						<span class="font-mono text-[0.7rem] text-muted">{p.period}</span>
					</div>
					<h3
						class="mt-2 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-on-surface"
					>
						{p.title}
					</h3>
					<p
						class="mt-3 max-w-[46rem] font-body text-[1rem] leading-[1.6] font-medium text-on-surface-variant"
					>
						{p.desc}
					</p>
					<div class="mt-5 flex flex-wrap gap-1.5">
						{#each p.tech as t (t)}
							<TechBadge>{t}</TechBadge>
						{/each}
					</div>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<!-- ─── 3. FALLSTUDIEN ─── -->
<Section class="pt-16 pb-2">
	<div class="reveal">
		<SectionHead
			label={m.arbeit_cases_label()}
			title={m.arbeit_cases_title()}
			desc={m.arbeit_cases_desc()}
		/>
	</div>

	<div class="flex flex-col gap-6">
		{#each caseStudies as cs (cs.id)}
			<div class="reveal">
				<Card pad="md" interactive class="relative isolate overflow-hidden">
					<span
						class="pointer-events-none absolute top-4 right-6 -z-10 font-display text-[clamp(3rem,5vw,5.5rem)] leading-none font-semibold text-secondary/25 select-none"
						aria-hidden="true">{cs.number}</span
					>
					<div class="flex flex-wrap gap-1.5">
						{#each cs.tags as tag (tag)}
							<TechBadge tone="warm">{tag}</TechBadge>
						{/each}
					</div>
					<h3
						class="mt-3 font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-semibold tracking-[-0.01em] text-on-surface"
					>
						{cs.title}
					</h3>
					<dl class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
						<div>
							<dt
								class="mb-1.5 font-mono text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase"
							>
								{m.arbeit_case_label_problem()}
							</dt>
							<dd class="font-body text-[0.95rem] leading-[1.6] text-on-surface-variant">
								{cs.problem}
							</dd>
						</div>
						<div>
							<dt
								class="mb-1.5 font-mono text-[0.65rem] font-medium tracking-[0.16em] text-muted uppercase"
							>
								{m.arbeit_case_label_solution()}
							</dt>
							<dd class="font-body text-[0.95rem] leading-[1.6] text-on-surface-variant">
								{cs.solution}
							</dd>
						</div>
						<div class="border-primary/25 lg:border-l lg:pl-6">
							<dt
								class="mb-1.5 font-mono text-[0.65rem] font-medium tracking-[0.16em] text-warm-deep uppercase"
							>
								{m.arbeit_case_label_result()}
							</dt>
							<dd class="font-body text-[0.95rem] leading-[1.6] font-semibold text-primary">
								{cs.result}
							</dd>
						</div>
					</dl>
				</Card>
			</div>
		{/each}
	</div>
</Section>

<style>
	:global(.svelte-flow) {
		--xy-node-border-default: 1px solid var(--surface-container-high);
		--xy-node-background-color-default: var(--surface-container-lowest);
		--xy-handle-background-color-default: var(--secondary);
		--xy-edge-stroke-default: var(--outline-variant);
		--xy-edge-stroke-selected-default: var(--secondary);
		--xy-connectionline-stroke-default: var(--secondary);
		--xy-background-color-default: var(--surface-container-low);
	}

	:global(.flow-canvas) {
		min-height: 560px;
	}

	@media (max-width: 1024px) {
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
