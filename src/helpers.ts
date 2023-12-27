export const joinClasses = (
  ...classes: Array<string | undefined | false>
): string => {
  return classes.filter((c) => !!c).join(" ")
}
