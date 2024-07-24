import { it, expect, beforeEach } from 'vitest'
import { UserColorService } from '@/Services/Color/UserColorService'
import { Md5Hash } from '@/Services/Hash/Md5Hash'

let userColor: UserColorService

beforeEach(() => {
  userColor = new UserColorService(new Md5Hash())
})

it.each([
  ['fabriziofs9', '#7d44dd'],
  ['katarn', '#ad0aa8'],
  ['variableisnull', '#fb6faa'],
  ['tinkerers_dev', '#1096f2'],
  ['lagreycueva', '#5d2e99']
])('should return a new color when the user has no color', (user: string, color: string) => {
  expect(userColor.userColor(user, null)).toBe(color)
})

it.each([
  ['fabriziofs9', '#83174e'],
  ['katarn', '#5c87c5'],
  ['variableisnull', '#f16705'],
  ['tinkerers_dev', '#55a852'],
  ['lagreycueva', '#8f0000']
])('should return given color when the user already has a color', (user: string, color: string) => {
  expect(userColor.userColor(user, color)).toBe(color)
})
