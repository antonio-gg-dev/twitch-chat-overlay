import { it, expect, beforeEach } from 'vitest'
import { HashInterface } from '@/Services/Hash/HashInterface'
import { Md5Hash } from '@/Services/Hash/Md5Hash'

let hash: HashInterface

beforeEach(() => {
  hash = new Md5Hash()
})

it.each([
  ['hello', '5d41402abc4b2a76b9719d911017c592'],
  ['world', '7d793037a0760186574b0282f2f435e7'],
  ['', 'd41d8cd98f00b204e9800998ecf8427e'],
  ['hello world', '5eb63bbbe01eeed093cb22bb8f5acdc3'],
  ['2024-07-24T07:40:53+0000', '7cddb0ed99c708e5a707aacb3c0cae17']
])('should hash given string in md5', (given: string, expected: string) => {
  expect(hash.hash(given)).toBe(expected)
})
