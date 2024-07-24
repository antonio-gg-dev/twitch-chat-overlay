import { it, expect, beforeEach } from 'vitest'
import { ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import { ColorJsIoColorVariants } from '../../../src/Services/Color/ColorJsIoColorVariants'

let colorVariants: ColorVariantsInterface

beforeEach(() => {
  colorVariants = new ColorJsIoColorVariants()
})

it.each([
  ['#dc143c', '#d9264a'],
  ['#17e5aa', '#26d9a6'],
  ['#531ac5', '#6226d9'],
  ['#58755a', '#26d933'],
  ['#959595', '#d92626']
])('should generate a primary color variant', (given: string, expected: string) => {
  expect(colorVariants.colorPrimary(given)).toBe(expected)
})

it.each([
  ['#dc143c', '#d93e26'],
  ['#17e5aa', '#26d0d9'],
  ['#531ac5', '#9d26d9'],
  ['#58755a', '#26d96e'],
  ['#959595', '#d96226']
])('should generate a secondary color variant', (given: string, expected: string) => {
  expect(colorVariants.colorSecondary(given)).toBe(expected)
})

it.each([
  ['#dc143c', '#d92685'],
  ['#17e5aa', '#26d96a'],
  ['#531ac5', '#2626d9'],
  ['#58755a', '#55d926'],
  ['#959595', '#d92662']
])('should generate a tertiary color variant', (given: string, expected: string) => {
  expect(colorVariants.colorTertiary(given)).toBe(expected)
})

it.each([
  ['#dc143c', '#f0a8b7'],
  ['#17e5aa', '#a8f0db'],
  ['#531ac5', '#c0a8f0'],
  ['#58755a', '#a8f0ad'],
  ['#959595', '#f0a8a8']
])('should generate a primary light color variant', (given: string, expected: string) => {
  expect(colorVariants.colorPrimaryLight(given)).toBe(expected)
})

it.each([
  ['#dc143c', '#f0b2a8'],
  ['#17e5aa', '#a8ecf0'],
  ['#531ac5', '#d8a8f0'],
  ['#58755a', '#a8f0c5'],
  ['#959595', '#f0c0a8']
])('should generate a secondary light color variant', (given: string, expected: string) => {
  expect(colorVariants.colorSecondaryLight(given)).toBe(expected)
})

it.each([
  ['#dc143c', '#f0a8ce'],
  ['#17e5aa', '#a8f0c3'],
  ['#531ac5', '#a8a8f0'],
  ['#58755a', '#bbf0a8'],
  ['#959595', '#f0a8c0']
])('should generate a tertiary light color variant', (given: string, expected: string) => {
  expect(colorVariants.colorTertiaryLight(given)).toBe(expected)
})
