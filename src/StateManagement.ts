import { atom } from "nanostores";

export const resolutions = atom({
    "1080p": { width: 1920, height: 1080 },
    "720p": { width: 1280, height: 720 },
    "480p": { width: 854, height: 480 },
    "360p": { width: 640, height: 360 },
    "160p": { width: 284, height: 160 },
});

export const currentTab = atom("Sub") // Sub, Bitrate

export const userFpsValue = atom(0);

export const userSubValue = atom(0);

export const userSubTier = atom("Tier 1 Subs")

export const tierMultiplicator = atom(2.5)