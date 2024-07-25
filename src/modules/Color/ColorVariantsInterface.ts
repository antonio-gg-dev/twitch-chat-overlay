export interface ColorVariantsInterface {
  colorPrimary(color: string): string
  colorSecondary(color: string): string
  colorTertiary(color: string): string
  colorPrimaryLight(color: string): string
  colorSecondaryLight(color: string): string
  colorTertiaryLight(color: string): string
}

export const ColorVariants = Symbol()
