import type { HashInterface } from '@/modules/Hash/HashInterface'
import md5 from 'md5'

export class Md5Hash implements HashInterface {
  hash(string: string): string {
    return md5(string)
  }
}
