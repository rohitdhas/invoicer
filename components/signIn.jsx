import {
  signIn,
  signOut,
  getCsrfToken,
  getSession,
  getProviders,
} from "next-auth/react";

function Signin({ providers }) {
  console.log(providers);
  return (
    <div>
      {/* {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })} */}
    </div>
  );
}

export default Signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders({ req });
  const csrfToken = await getCsrfToken({ req });

  console.log(session);

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
