export interface Message {
  id: string
  user: string
  color: string | null
  message: MessageSegment[]
  date: Date
}

export interface MessageSegment {
  type: 'text' | 'emote'
  content: string
}
