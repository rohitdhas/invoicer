import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute h-[200px] w-[200px] bg-white shadow-lg rounded-md z-[10] text-center p-4"
    >
      {providers ? (
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
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

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
