
export async function tryCatch<T, R = {}>(
  service: (args?: R) => Promise<T>,
  args?: R,
): Promise<[T, any]> {
  try {
    return [await service(args), null as any]
  } catch (e) {
    // handleError(e);
    return [null as any, e]
  }
}
