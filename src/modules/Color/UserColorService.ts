import type { HashInterface } from '@/modules/Hash/HashInterface'

export class UserColorService {
  constructor(private hash: HashInterface) {}

  userColor(user: string, color: string | null): string {
    if (color !== null) {
      return color
    }

    return '#' + this.hash.hash(user).substring(0, 6)
  }
}

export const UserColor = Symbol()
