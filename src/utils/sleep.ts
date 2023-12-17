export const sleep = ({ ms }: { ms: number }) => {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
};
