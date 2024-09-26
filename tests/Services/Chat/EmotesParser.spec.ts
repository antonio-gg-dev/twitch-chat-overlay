import { it, expect, beforeEach } from 'vitest'
import { EmotesParserInterface } from '../../../src/modules/Chat/EmotesParserInterface'
import {
  EMOTE_URL_TEMPLATE,
  EmotesParserService
} from '../../../src/modules/Chat/EmotesParserService'
import { MessageSegment } from '../../../src/modules/Chat/Message'

let emotesParser: EmotesParserInterface

beforeEach(() => {
  emotesParser = new EmotesParserService()
})

it('should leave a message without emotes unchanged', () => {
  const message = 'hello world'
  const emoteOccurrences = ''
  const expected: MessageSegment[] = [{ type: 'text', content: 'hello world' }]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse an emote at the beginning of a message', () => {
  const message = 'Kappa hello world'
  const emoteOccurrences = '25:0-4'
  const expected: MessageSegment[] = [
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' hello world' }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse an emote in the middle of a message', () => {
  const message = 'hello Kappa world'
  const emoteOccurrences = '25:6-10'
  const expected: MessageSegment[] = [
    { type: 'text', content: 'hello ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' world' }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse an emote at the end of a message', () => {
  const message = 'hello world Kappa'
  const emoteOccurrences = '25:12-16'
  const expected: MessageSegment[] = [
    { type: 'text', content: 'hello world ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse two different emotes', () => {
  const message = 'Kappa hello world LUL'
  const emoteOccurrences = '25:0-4/425618:18-20'
  const expected: MessageSegment[] = [
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' hello world ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '425618') }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse a repeated emote', () => {
  const message = 'Kappa hello world Kappa'
  const emoteOccurrences = '25:0-4,18-22'
  const expected: MessageSegment[] = [
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' hello world ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse two different repeated emotes repeated', () => {
  const message = 'Kappa is funny Kappa but LUL is funnier LUL'
  const emoteOccurrences = '25:0-4,15-19/425618:25-27,40-42'
  const expected: MessageSegment[] = [
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' is funny ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' but ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '425618') },
    { type: 'text', content: ' is funnier ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '425618') }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
it('should parse two occurrences of the same emote with a different emote in the middle', () => {
  const message = 'Kappa hello LUL world Kappa'
  const emoteOccurrences = '25:0-4,22-26/425618:12-14'
  const expected: MessageSegment[] = [
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') },
    { type: 'text', content: ' hello ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '425618') },
    { type: 'text', content: ' world ' },
    { type: 'emote', content: EMOTE_URL_TEMPLATE.replace('%id', '25') }
  ]

  expect(emotesParser.parseMessageWithEmotes(message, emoteOccurrences)).toEqual(expected)
})
