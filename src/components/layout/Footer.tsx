export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p className="text-sm">&copy; {new Date().getFullYear()} EduCentral. All rights reserved.</p>
        <p className="text-xs mt-1">Empowering Education, One Click at a Time.</p>
      </div>
    </footer>
  );
}
