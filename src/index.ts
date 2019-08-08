export function arrayLikePartialEqual<T>(
  x: ArrayLike<T>,
  xOffset: number,
  y: ArrayLike<T>,
  yOffset: number,
  length: number,
): boolean {
  for (let i = 0; i < length; i++) {
    if (x[xOffset + i] !== y[yOffset + i]) {
      return false;
    }
  }
  return true;
}
