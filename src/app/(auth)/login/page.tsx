import { LoginForm } from "@/components/auth/LoginForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - EduCentral',
  description: 'Login to your EduCentral account.',
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center py-12">
      <LoginForm />
    </div>
  );
}
