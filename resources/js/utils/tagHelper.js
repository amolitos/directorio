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

export function avoidEqualValues(tag, allTags, selectedTags) {
  const words = tag.label.split(' ');
  const newTags = [];
  let repeat = 0;

  words.forEach((w) => {
    if (allTags.map((a) => a.label).includes(w)) {
      repeat += 1;
      if (!selectedTags.map((s) => s.label).includes(w)) {
        newTags.push({
          value: w,
          label: w,
        });
      }
    }
  });

  const merged = [...selectedTags, ...newTags];

  if (repeat <= 1) {
    return [...merged, tag];
  }

  return merged;
}

export function toSingleArray(items) {
  return items.map((item) => item.label);
}
