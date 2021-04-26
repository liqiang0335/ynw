export default function IF({ value, children }) {
  if (!value) return null;
  return children;
}
