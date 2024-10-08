"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// this will be the page where the user lands on and enters an identifier to enter the chat room. I think for now the chat room will be open to anyone who wants to join.

function Page() {
  const input = useRef(null);
  const router = useRouter();
  // going to store the identifier in localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const res = localStorage.getItem("user") || "";
      if (res !== "") router.push("/chat");
    }
  }, [router]);

  function handlekey(e) {
    if (e.code === "Enter") {
      e.preventDefault();
      if (input.current === "") return;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", input.current.value);
        router.push("/chat");
      }
    }
  }
  return (
    <main
      className="flex flex-col items-center justify-center h-screen mx-2"
      onKeyDown={handlekey}
    >
      <h1 className="text-gray-200 text-3xl my-4 text-center">
        Welcome to a Simple Chat app!
      </h1>
      <h2 className="text-gray-200 text-2xl my-4 text-center">
        Enter your name below to start -
      </h2>
      <input className="outline-none p-2 rounded-2xl" ref={input} />
      <button
        className="mt-4 text-gray-200 rounded-2xl bg-blue-600 px-4 py-2 hover:bg-blue-700 transition-all duration-300"
        onClick={() => {
          const e = {
            code: "Enter",
            preventDefault: () => {
              return;
            },
          };
          handlekey(e);
        }}
      >
        submit
      </button>
    </main>
  );
}

export default Page;
