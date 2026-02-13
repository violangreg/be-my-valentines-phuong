export const getAssetPath = (path: string): string => {
  const basePath = "/be-my-valentines-phuong";
  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }
  return path;
};
