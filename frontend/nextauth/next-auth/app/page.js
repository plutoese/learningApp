import {
  LoginButton,
  LogoutButton,
  RegisterButton,
  ProfileButton,
} from "@/components/buttons.component";
import { User } from "@/components/user.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <>
      <h1 className="text-3xl mt-6 ml-6">首页</h1>
      <div className="flex space-x-4 mt-3 ml-6">
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
      <div className="mt-3 ml-6">Server Session: {JSON.stringify(session)}</div>
      <User />
    </>
  );
}
