import Image from 'next/image';
import type { Teacher } from '@/lib/placeholder-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react'; // Or another suitable icon

interface TeacherCardProps {
  teacher: Teacher;
}

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-64 sm:h-72"> {/* Taller image for portrait */}
          <Image
            src={teacher.imageUrl}
            alt={teacher.name}
            layout="fill"
            objectFit="cover"
            className="bg-muted"
            data-ai-hint={teacher.imageHint || 'educator portrait'}
          />
        </div>
        <div className="p-6">
          <CardTitle className="text-2xl font-headline mb-2 leading-tight flex items-center">
            <GraduationCap className="mr-3 h-7 w-7 text-primary" />
            {teacher.name}
          </CardTitle>
          <div className="mb-3">
            {teacher.subjects.map((subject) => (
              <Badge key={subject} variant="secondary" className="mr-2 mb-1 text-sm">
                {subject}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 pb-6">
        <CardDescription className="text-base text-foreground/80 line-clamp-4">
          {teacher.bio}
        </CardDescription>
      </CardContent>
      {/* Optional: Add a CardFooter for a "View Profile" button if needed later */}
      {/* 
      <CardFooter className="px-6 pb-6">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={`/profile/teacher/${teacher.id}`}>View Profile</Link>
        </Button>
      </CardFooter> 
      */}
    </Card>
  );
}
