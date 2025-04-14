import { useState, useRef, useEffect } from "react";
function Component() {
  const [avatar, setAvatar] = useState();
  const [count, setCount] = useState(0);
    let timer = 0;
  console.log("🌀 Render - avatar:", timer);

  useEffect(() => {
    console.log("✅ useEffect - avatar:", {count});

    return () => {
      console.log("🧹 Cleanup - avatar:", {count});
    };
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div>
      <h2>React Cleanup Demo</h2>
      <input type="file" onChange={handleChange} />
      <button onClick={() => setCount((c) => c + 1)}>Force re-render</button>
      <p>Render count: {count}</p>
      {avatar && <img src={avatar.preview} alt="preview" width={150} />}
    </div>
  );
}

export default Component;
