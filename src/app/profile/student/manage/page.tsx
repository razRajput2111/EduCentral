import { ProfileForm } from "@/components/profile/ProfileForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Student Profile - EduCentral',
  description: 'Create or update your student profile on EduCentral.',
};

export default function StudentProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <ProfileForm profileType="Student" />
    </div>
  );
}
