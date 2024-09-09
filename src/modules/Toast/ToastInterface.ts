export interface ToastInterface {
  info(text: string): void
}

export const Toast = Symbol()
