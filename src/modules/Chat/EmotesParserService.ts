import type { EmotesParserInterface } from "@/modules/Chat/EmotesParserInterface";
import type { MessageSegment } from "./Message";

export const EMOTE_URL_TEMPLATE = 'https://static-cdn.jtvnw.net/emoticons/v2/%id/default/dark/1.0';

export class EmotesParserService implements EmotesParserInterface {
    parseMessageWithEmotes(message: string, emoteOccurrences: string): MessageSegment[] {
        return [{ type: 'text', content: message }];
    }
}