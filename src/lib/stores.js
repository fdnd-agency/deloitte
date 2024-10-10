import { writable } from 'svelte/store';

export const totalScore = writable(0);
export const userAnswers = writable([]);
