import { doSocialLogin } from "@/app/actions/loginAction";

const LoginForm = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-grey">
      <form action={doSocialLogin}>
        <button
          className="bg-pink-400 p-2 rounded-md m-1 text-lg border-2 border-red-500"
          type="submit"
          name="action"
          value="google"
        >
          Sign In With Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
