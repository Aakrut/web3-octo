import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 rounded-lg shadow flex gap-1 md:p-10 bg-[#1E364A] items-center justify-center font-body flex-col sm:text-center">
      <h1 className="text-3xl md:text-xl sm:text-base">
        Designed and Developed By{" "}
        <span className=" text-transparent font-bold bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
          Aakrut Dabhi
        </span>
      </h1>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <Link href="/dashboard">
          <a class="hover:underline">Octo™</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
