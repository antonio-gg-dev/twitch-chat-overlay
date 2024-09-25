import type { EmotesParserInterface } from "@/modules/Chat/EmotesParserInterface";
import type { MessageSegment } from "./Message";

export const EMOTE_URL_TEMPLATE = 'https://static-cdn.jtvnw.net/emoticons/v2/%id/default/dark/1.0';

export class EmotesParserService implements EmotesParserInterface {
    parseMessageWithEmotes(message: string, emoteOccurrences: string): MessageSegment[] {
        if (!emoteOccurrences) {
            return [{ type: 'text', content: message }];
        }

        interface Emote {
            id: string
            start: number
            end: number
        }

        const messageSegments: MessageSegment[] = [];
        const emotes: Emote[] = [];

        emoteOccurrences.split('/').forEach((emoteOccurrence) => {
            const [id, positions] = emoteOccurrence.split(':');
            positions.split(',').forEach((position) => {
                const [start, end] = position.split('-').map(Number);
                emotes.push({ id, start, end });
            });
        });

        emotes.sort((a, b) => a.start - b.start);

        let lastEnd = 0;

        emotes.forEach(emote => {
            if (emote.start > lastEnd) {
                messageSegments.push({ type: 'text', content: message.slice(lastEnd, emote.start) });
            }

            const emoteUrl = EMOTE_URL_TEMPLATE.replace('%id', emote.id);

            messageSegments.push({ type: 'emote', content: emoteUrl });

            lastEnd = emote.end + 1;
        })

        if (lastEnd < message.length) {
            messageSegments.push({ type: 'text', content: message.slice(lastEnd) });
        }

        return messageSegments;
    }
}