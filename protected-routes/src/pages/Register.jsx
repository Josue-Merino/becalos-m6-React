import HeaderLogin from "../components/HeaderLogin";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
      <HeaderLogin />
      <main className="container mx-auto px-4">
        <RegisterForm />
      </main>
    </>
  );
}

export default Register;