import type { MessageSegment } from './Message'

export interface EmotesParserInterface {
  parseMessageWithEmotes(message: string, emoteOccurrences: string): MessageSegment[]
}
