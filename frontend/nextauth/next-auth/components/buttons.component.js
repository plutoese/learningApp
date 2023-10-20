"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button
      className="text-white bg-lime-800 rounded-lg px-3 py-2"
      onClick={signIn}
    >
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      className="text-white bg-red-700 rounded-lg px-3 py-2"
    >
      register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="text-white bg-blue-700 rounded-lg px-3 py-2"
      onClick={signOut}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return (
    <Link
      href="/profile"
      className="text-white bg-amber-700 rounded-lg px-3 py-2"
    >
      Profile
    </Link>
  );
};
