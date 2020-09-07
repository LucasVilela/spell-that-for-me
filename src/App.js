import React, { useState } from "react";
import "./styles.css";

const alphabet = {
  a: "Alpha",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliet",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Qubec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "X-ray",
  y: "Yankee",
  z: "Zulu",
  "@": "@at"
};

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      Spell that for me
      <div>{input}</div>
      <label>
        <input
          type="text"
          name="name"
          onChange={(e) => setInput(e.target.value.toLocaleLowerCase())}
        />
      </label>
      <div style={{ textAlign: "left" }}>
        {input.split("").map((i, index) => (
          <p key={index}>{alphabet[i]}</p>
        ))}
      </div>
    </div>
  );
}
