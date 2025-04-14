import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null); // Thêm state user
  const [error, setError] = useState(null); // Thêm state error

  useEffect(() => {
    let isMounted = true;

    fetch("http://localhost:8081/identity/users", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json(); // Parse JSON từ response
      })
      .then((data) => {
        if (isMounted) {
          console.log("User data:", data);
          setUser(data); // data là object { name: "..." }
        }
      })
      .catch((err) => {
        console.error(err);
        window.location.href = "/login"; // Redirect đến trang login
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {user ? (
        user.map(
          (
            dat // Sử dụng optional chaining (?.) để tránh lỗi nếu data là null/undefined
          ) => (
            <h1 key={dat.id}>Xin chào, {dat.title}</h1> // Thêm key unique (ví dụ: dat.id)
          )
        )
      ) : (
        <p>⏳ Đang kết nối...</p>
      )}
    </div>
  );
};

export default Dashboard;
