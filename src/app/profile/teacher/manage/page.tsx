import { ProfileForm } from "@/components/profile/ProfileForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Teacher Profile - EduCentral',
  description: 'Create or update your teacher profile on EduCentral.',
};

export default function TeacherProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <ProfileForm profileType="Teacher" />
    </div>
  );
}
