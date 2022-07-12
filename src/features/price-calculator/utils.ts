function serializeFormQuery<Data extends Object>(data: Data) {
  const params = new URLSearchParams();
  // eslint-disable-next-line
  for (let [key, value] of Object.entries(data)) {
    params.append(key, value);
  }
  return params.toString();
}

export const Utils = {
  serializeFormQuery,
};
