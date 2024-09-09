import type { ToastInterface } from '@/modules/Toast/ToastInterface'
import type { Notyf } from 'notyf'

export class NotyfToast implements ToastInterface {
  constructor(private readonly notyf: Notyf) {
    notyf.options = {
      ...notyf.options,
      ripple: false,
      duration: 3000,
      position: {
        y: 'bottom',
        x: 'center'
      },
      types: [
        {
          type: 'info'
        }
      ]
    }
  }

  info(text: string): void {
    this.notyf.open({
      type: 'info',
      message: text
    })
  }
}
