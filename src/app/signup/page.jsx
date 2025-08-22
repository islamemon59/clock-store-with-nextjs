import SignupForm from "./Components/SignupForm/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <SignupForm />
      </div>
    </div>
  );
}
