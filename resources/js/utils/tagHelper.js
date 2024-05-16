export function sanitizeTag(tag) {
  const sanitize = tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z ]/g, '');
  return {
    value: sanitize,
    label: sanitize,
  };
}

export function toSingleArray(items) {
  return items.map((item) => item.label);
}
