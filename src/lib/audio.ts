let audioCtx: AudioContext | null = null;
let isMutedState = false;

if (typeof window !== 'undefined') {
	isMutedState = localStorage.getItem('audioMute') === 'true';
}

export function isMuted(): boolean {
	return isMutedState;
}

export function toggleMute(): boolean {
	isMutedState = !isMutedState;
	if (typeof window !== 'undefined') {
		localStorage.setItem('audioMute', String(isMutedState));
	}
	return isMutedState;
}

function getAudioContext(): AudioContext | null {
	if (typeof window === 'undefined') return null;
	if (!audioCtx) {
		const AudioContextClass =
			window.AudioContext ||
			(window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
		if (AudioContextClass) {
			audioCtx = new AudioContextClass();
		}
	}
	if (audioCtx && audioCtx.state === 'suspended') {
		audioCtx.resume().catch(() => {
			// Ignore state resume failures from browser policies
		});
	}
	return audioCtx;
}

function createNoiseBuffer(ctx: AudioContext, duration = 0.5): AudioBuffer {
	const bufferSize = ctx.sampleRate * duration;
	const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < bufferSize; i++) {
		data[i] = Math.random() * 2 - 1;
	}
	return buffer;
}

/**
 * Plays a clean, micro mechanical keyboard click sound.
 * Formed by a fast pitching-down sine wave transient and a high-frequency noise burst.
 */
export function playKeyboardClick(): void {
	try {
		if (isMutedState) return;
		const ctx = getAudioContext();
		if (!ctx) return;

		const now = ctx.currentTime;

		// 1. Oscillator for transient tone pop
		const osc = ctx.createOscillator();
		const oscGain = ctx.createGain();
		osc.type = 'sine';
		osc.frequency.setValueAtTime(900, now);
		osc.frequency.exponentialRampToValueAtTime(120, now + 0.02);

		oscGain.gain.setValueAtTime(0.04, now); // subtle, not too loud
		oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

		// 2. High-pass filter & noise for switch friction/click
		const noiseSource = ctx.createBufferSource();
		noiseSource.buffer = createNoiseBuffer(ctx, 0.05);
		const noiseGain = ctx.createGain();
		const filter = ctx.createBiquadFilter();

		filter.type = 'bandpass';
		filter.frequency.setValueAtTime(3200, now);
		filter.Q.setValueAtTime(2.5, now);

		noiseGain.gain.setValueAtTime(0.025, now);
		noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

		// Connections
		osc.connect(oscGain);
		oscGain.connect(ctx.destination);

		noiseSource.connect(filter);
		filter.connect(noiseGain);
		noiseGain.connect(ctx.destination);

		// Playback controls
		osc.start(now);
		osc.stop(now + 0.03);
		noiseSource.start(now);
		noiseSource.stop(now + 0.03);
	} catch (e) {
		console.warn('Audio click playback failed:', e);
	}
}

/**
 * Plays a realistic mechanical SLR camera shutter sound.
 * Combines a mirror flip-up transient, a curtain slide wind-down noise, and a sharp shutter curtain close transient.
 */
export function playCameraShutter(): void {
	try {
		if (isMutedState) return;
		const ctx = getAudioContext();
		if (!ctx) return;

		const now = ctx.currentTime;
		const noiseBuffer = createNoiseBuffer(ctx, 0.25);

		// --- 1. Mirror Flip Up (First Transient) ---
		const osc1 = ctx.createOscillator();
		const oscGain1 = ctx.createGain();
		osc1.type = 'triangle';
		osc1.frequency.setValueAtTime(450, now);
		osc1.frequency.exponentialRampToValueAtTime(150, now + 0.015);
		oscGain1.gain.setValueAtTime(0.06, now);
		oscGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
		osc1.connect(oscGain1);
		oscGain1.connect(ctx.destination);

		const noise1 = ctx.createBufferSource();
		noise1.buffer = noiseBuffer;
		const noiseGain1 = ctx.createGain();
		const filter1 = ctx.createBiquadFilter();
		filter1.type = 'bandpass';
		filter1.frequency.setValueAtTime(1400, now);
		filter1.Q.setValueAtTime(2.0, now);
		noiseGain1.gain.setValueAtTime(0.04, now);
		noiseGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
		noise1.connect(filter1);
		filter1.connect(noiseGain1);
		noiseGain1.connect(ctx.destination);

		// --- 2. Shutter Curtain Travel (Middle mechanical friction) ---
		const travelNoise = ctx.createBufferSource();
		travelNoise.buffer = noiseBuffer;
		const travelGain = ctx.createGain();
		const travelFilter = ctx.createBiquadFilter();
		travelFilter.type = 'bandpass';
		travelFilter.frequency.setValueAtTime(950, now);
		travelFilter.Q.setValueAtTime(1.0, now);
		travelGain.gain.setValueAtTime(0.0, now);
		travelGain.gain.linearRampToValueAtTime(0.015, now + 0.01);
		travelGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);
		travelNoise.connect(travelFilter);
		travelFilter.connect(travelGain);
		travelGain.connect(ctx.destination);

		// --- 3. Shutter Closing & Mirror Down (Second Transient at ~75ms) ---
		const closeTime = now + 0.075;
		const osc2 = ctx.createOscillator();
		const oscGain2 = ctx.createGain();
		osc2.type = 'sine';
		osc2.frequency.setValueAtTime(320, closeTime);
		osc2.frequency.exponentialRampToValueAtTime(90, closeTime + 0.025);
		oscGain2.gain.setValueAtTime(0.08, closeTime);
		oscGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.025);
		osc2.connect(oscGain2);
		oscGain2.connect(ctx.destination);

		const noise2 = ctx.createBufferSource();
		noise2.buffer = noiseBuffer;
		const noiseGain2 = ctx.createGain();
		const filter2 = ctx.createBiquadFilter();
		filter2.type = 'bandpass';
		filter2.frequency.setValueAtTime(2000, closeTime);
		filter2.Q.setValueAtTime(2.0, closeTime);
		noiseGain2.gain.setValueAtTime(0.06, closeTime);
		noiseGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.035);
		noise2.connect(filter2);
		filter2.connect(noiseGain2);
		noiseGain2.connect(ctx.destination);

		// Start all scheduled playbacks
		osc1.start(now);
		osc1.stop(now + 0.03);
		noise1.start(now);
		noise1.stop(now + 0.03);

		travelNoise.start(now);
		travelNoise.stop(now + 0.09);

		osc2.start(closeTime);
		osc2.stop(closeTime + 0.04);
		noise2.start(closeTime);
		noise2.stop(closeTime + 0.04);
	} catch (e) {
		console.warn('Audio shutter playback failed:', e);
	}
}
