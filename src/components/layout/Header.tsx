import Link from 'next/link';
import { BookOpenText, LayoutGrid, UserCircle, LogIn, Edit3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: '/', label: 'Courses', icon: LayoutGrid },
  { href: '/teachers', label: 'Teachers', icon: Users },
];

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <BookOpenText size={32} />
          <h1 className="text-2xl font-headline font-bold">EduCentral</h1>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <Button key={link.label} variant="ghost" asChild className="text-foreground hover:text-primary hover:bg-primary/10">
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon size={18} className="hidden sm:inline" />
                <span className="text-sm sm:text-base">{link.label}</span>
              </Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/10 flex items-center gap-2">
                <UserCircle size={18} className="hidden sm:inline" />
                <span className="text-sm sm:text-base">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Manage Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile/teacher/manage" className="flex items-center gap-2">
                  <Edit3 size={16} /> Teacher Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile/student/manage" className="flex items-center gap-2">
                  <Edit3 size={16} /> Student Profile
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="default" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/auth/login" className="flex items-center gap-1 sm:gap-2">
              <LogIn size={18} />
              <span className="text-sm sm:text-base">Login</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
