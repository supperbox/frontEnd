export const getImageUrl = (url) => {
  // 参数1是一个相对路径 ； 参数2是当前路径的url
  return new URL(`../assets/img/${url}`, import.meta.url).href;
};
