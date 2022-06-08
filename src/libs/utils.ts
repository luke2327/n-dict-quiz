// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uniqArray: (arr: Array<string | number>) =>
    arr.filter((item, pos) => arr.indexOf(item) == pos),
  compactArray: (arr: Array<any>) => arr.filter(v => !!v),
};
