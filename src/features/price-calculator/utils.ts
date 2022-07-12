function serializeFormQuery<Data extends Object>(data: Data) {
  const obj = Object
    .entries(data)
    .reduce((result, [key, value]) => {
      // eslint-disable-next-line
      result[key] = value .toString();
      return result;
    }, {} as Record<string, string>);
  const params = new URLSearchParams(obj);
  return params;
}

export const Utils = {
  serializeFormQuery,
};
