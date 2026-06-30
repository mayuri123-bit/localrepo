// Child Component receiving data via destructuring
function React({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}