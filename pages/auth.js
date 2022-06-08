import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="mt-28">
        <p className="text-xl font-bold">Signed in as {session.user.email}</p>{" "}
        <br />
        <button
          className="bg-blue rounded-sm text-white font-bold p-4"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
