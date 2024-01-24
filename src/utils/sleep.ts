export const sleep = async ({ ms }: { ms: number }) => {
  return new Promise((resolve) => setTimeout(() => resolve('success'), ms));
};
