import { it, expect, beforeEach, describe } from 'vitest'
import { EmotesParserInterface } from '../../../src/modules/Chat/EmotesParserInterface'
import { EmotesParserService } from '../../../src/modules/Chat/EmotesParserService'
import { MessageSegment } from '../../../src/modules/Chat/Message'

let emotesParser: EmotesParserInterface

beforeEach(() => {
    emotesParser = new EmotesParserService()
})

describe('EmotesParserService', () => {
    it('should leave a message without emotes unchanged', () => {
        const message = 'hello world'
        const emoteOccurrences = ''
        const expected: MessageSegment[] = [{ type: 'text', content: 'hello world' }]

        expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
    })
})