// Source - https://stackoverflow.com/a
// Posted by Steve Harrison, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-07, License - CC BY-SA 4.0

//TODO: remove then
export default function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}
