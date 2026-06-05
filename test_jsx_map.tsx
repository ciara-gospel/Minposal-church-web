'use client';
export default function Test() {
  const items = ['a', 'b', 'c'];
  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item === 'a' ? <p>A</p> : <div>Other</div>}</div>
      ))}
    </div>
  );
}
