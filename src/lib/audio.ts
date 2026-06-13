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

		// --- 1. Mirror Flip Up & Shutter Open (First Transient) ---
		// Crisp high-frequency snap
		const snapNoise1 = ctx.createBufferSource();
		snapNoise1.buffer = noiseBuffer;
		const snapFilter1 = ctx.createBiquadFilter();
		snapFilter1.type = 'highpass';
		snapFilter1.frequency.setValueAtTime(3500, now);
		snapFilter1.Q.setValueAtTime(1.5, now);

		const snapGain1 = ctx.createGain();
		snapGain1.gain.setValueAtTime(0.12, now);
		snapGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

		snapNoise1.connect(snapFilter1);
		snapFilter1.connect(snapGain1);
		snapGain1.connect(ctx.destination);

		// Metallic/mid-frequency transient
		const metalNoise1 = ctx.createBufferSource();
		metalNoise1.buffer = noiseBuffer;
		const metalFilter1 = ctx.createBiquadFilter();
		metalFilter1.type = 'bandpass';
		metalFilter1.frequency.setValueAtTime(1200, now);
		metalFilter1.Q.setValueAtTime(3.0, now);

		const metalGain1 = ctx.createGain();
		metalGain1.gain.setValueAtTime(0.08, now);
		metalGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

		metalNoise1.connect(metalFilter1);
		metalFilter1.connect(metalGain1);
		metalGain1.connect(ctx.destination);

		// Body thump (lower frequency noise burst)
		const thumpNoise1 = ctx.createBufferSource();
		thumpNoise1.buffer = noiseBuffer;
		const thumpFilter1 = ctx.createBiquadFilter();
		thumpFilter1.type = 'bandpass';
		thumpFilter1.frequency.setValueAtTime(250, now);
		thumpFilter1.Q.setValueAtTime(2.0, now);

		const thumpGain1 = ctx.createGain();
		thumpGain1.gain.setValueAtTime(0.06, now);
		thumpGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

		thumpNoise1.connect(thumpFilter1);
		thumpFilter1.connect(thumpGain1);
		thumpGain1.connect(ctx.destination);

		// Faint high-frequency ring (tension release)
		const ringOsc1 = ctx.createOscillator();
		ringOsc1.type = 'sine';
		ringOsc1.frequency.setValueAtTime(2200, now);

		const ringGain1 = ctx.createGain();
		ringGain1.gain.setValueAtTime(0.01, now);
		ringGain1.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

		ringOsc1.connect(ringGain1);
		ringGain1.connect(ctx.destination);

		// --- 2. Shutter Curtain Travel (Middle mechanical friction) ---
		const travelNoise = ctx.createBufferSource();
		travelNoise.buffer = noiseBuffer;
		const travelFilter = ctx.createBiquadFilter();
		travelFilter.type = 'bandpass';
		travelFilter.frequency.setValueAtTime(950, now);
		travelFilter.Q.setValueAtTime(1.0, now);

		const travelGain = ctx.createGain();
		travelGain.gain.setValueAtTime(0.0, now);
		travelGain.gain.linearRampToValueAtTime(0.015, now + 0.01);
		travelGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

		travelNoise.connect(travelFilter);
		travelFilter.connect(travelGain);
		travelGain.connect(ctx.destination);

		// --- 3. Shutter Closing & Mirror Down (Second Transient at ~80ms) ---
		const closeTime = now + 0.08;

		// Crisp closing high-frequency snap
		const snapNoise2 = ctx.createBufferSource();
		snapNoise2.buffer = noiseBuffer;
		const snapFilter2 = ctx.createBiquadFilter();
		snapFilter2.type = 'highpass';
		snapFilter2.frequency.setValueAtTime(4500, closeTime);
		snapFilter2.Q.setValueAtTime(2.0, closeTime);

		const snapGain2 = ctx.createGain();
		snapGain2.gain.setValueAtTime(0.15, closeTime);
		snapGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.018);

		snapNoise2.connect(snapFilter2);
		snapFilter2.connect(snapGain2);
		snapGain2.connect(ctx.destination);

		// Mechanical curtain impact
		const metalNoise2 = ctx.createBufferSource();
		metalNoise2.buffer = noiseBuffer;
		const metalFilter2 = ctx.createBiquadFilter();
		metalFilter2.type = 'bandpass';
		metalFilter2.frequency.setValueAtTime(1600, closeTime);
		metalFilter2.Q.setValueAtTime(4.0, closeTime);

		const metalGain2 = ctx.createGain();
		metalGain2.gain.setValueAtTime(0.12, closeTime);
		metalGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.025);

		metalNoise2.connect(metalFilter2);
		metalFilter2.connect(metalGain2);
		metalGain2.connect(ctx.destination);

		// Mirror slap / damped body thud
		const slapNoise2 = ctx.createBufferSource();
		slapNoise2.buffer = noiseBuffer;
		const slapFilter2 = ctx.createBiquadFilter();
		slapFilter2.type = 'bandpass';
		slapFilter2.frequency.setValueAtTime(180, closeTime);
		slapFilter2.Q.setValueAtTime(1.5, closeTime);

		const slapGain2 = ctx.createGain();
		slapGain2.gain.setValueAtTime(0.12, closeTime);
		slapGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.06);

		slapNoise2.connect(slapFilter2);
		slapFilter2.connect(slapGain2);
		slapGain2.connect(ctx.destination);

		// Metallic ring/spring ping
		const ringOsc2 = ctx.createOscillator();
		ringOsc2.type = 'sine';
		ringOsc2.frequency.setValueAtTime(2900, closeTime);

		const ringGain2 = ctx.createGain();
		ringGain2.gain.setValueAtTime(0.015, closeTime);
		ringGain2.gain.exponentialRampToValueAtTime(0.001, closeTime + 0.04);

		ringOsc2.connect(ringGain2);
		ringGain2.connect(ctx.destination);

		// --- Playback Activation ---
		snapNoise1.start(now);
		snapNoise1.stop(now + 0.02);
		metalNoise1.start(now);
		metalNoise1.stop(now + 0.03);
		thumpNoise1.start(now);
		thumpNoise1.stop(now + 0.03);
		ringOsc1.start(now);
		ringOsc1.stop(now + 0.03);

		travelNoise.start(now);
		travelNoise.stop(now + 0.08);

		snapNoise2.start(closeTime);
		snapNoise2.stop(closeTime + 0.02);
		metalNoise2.start(closeTime);
		metalNoise2.stop(closeTime + 0.03);
		slapNoise2.start(closeTime);
		slapNoise2.stop(closeTime + 0.06);
		ringOsc2.start(closeTime);
		ringOsc2.stop(closeTime + 0.04);
	} catch (e) {
		console.warn('Audio shutter playback failed:', e);
	}
}
