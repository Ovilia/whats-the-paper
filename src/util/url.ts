export function getCurrentDoubanBookId() {
  const matches = location.pathname.match(/\/subject\/(.*)\//);
  return matches && matches[1];
}
