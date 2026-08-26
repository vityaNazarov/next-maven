"use client";

export default function Error({ reset }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Something went wrong</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
