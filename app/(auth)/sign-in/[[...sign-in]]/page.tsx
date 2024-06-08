import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
    </div>
  );
};
export default LoginPage;
