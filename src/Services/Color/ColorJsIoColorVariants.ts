import type { ColorVariantsInterface } from '@/Services/Color/ColorVariantsInterface'
import Color from 'colorjs.io'

export class ColorJsIoColorVariants implements ColorVariantsInterface {
  colorPrimary(color: string): string {
    const colorObj = new Color(color)

    colorObj.hsl.l = 50
    colorObj.hsl.s = 70

    return colorObj.toString({ format: 'hex' })
  }

  colorSecondary(color: string): string {
    const colorObj = new Color(color)

    colorObj.hsl.l = 50
    colorObj.hsl.s = 70
    colorObj.hsl.h += 20

    return colorObj.toString({ format: 'hex' })
  }

  colorTertiary(color: string): string {
    const colorObj = new Color(color)

    colorObj.hsl.l = 50
    colorObj.hsl.s = 70
    colorObj.hsl.h -= 20

    return colorObj.toString({ format: 'hex' })
  }

  colorPrimaryLight(color: string): string {
    const colorObj = new Color(this.colorPrimary(color))

    colorObj.hsl.l = 80

    return colorObj.toString({ format: 'hex' })
  }

  colorSecondaryLight(color: string): string {
    const colorObj = new Color(this.colorSecondary(color))

    colorObj.hsl.l = 80

    return colorObj.toString({ format: 'hex' })
  }

  colorTertiaryLight(color: string): string {
    const colorObj = new Color(this.colorTertiary(color))

    colorObj.hsl.l = 80

    return colorObj.toString({ format: 'hex' })
  }
}
