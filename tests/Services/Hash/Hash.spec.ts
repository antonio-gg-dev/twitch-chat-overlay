import { it, expect, beforeEach } from 'vitest'
import { HashInterface } from '@/Services/Hash/HashInterface'
import { Md5Hash } from '../../../src/Services/Hash/Md5Hash'

let hash: HashInterface

beforeEach(() => {
  hash = new Md5Hash()
})

it('should work', () => {
  expect(true).toBeTruthy()
})
