import React from "react";

export default function SearchBar({ value = "", onChange, placeholder = "Search..." }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.6rem 0.8rem",
          borderRadius: 6,
          border: "1px solid #ddd",
          fontSize: 14,
        }}
      />
    </div>
  );
}