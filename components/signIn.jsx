import { signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute h-[200px] w-[400px] bg-white shadow-lg rounded-md z-[10] text-center p-4"
    >
      {providers ? (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="p-2 rounded-sm bg-secondary-300 shadow-md text-white font-bold hover:bg-secondary-200"
              onClick={() => signIn(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))
      ) : (
        <h1>No Providers</h1>
      )}
    </div>
  );
}
