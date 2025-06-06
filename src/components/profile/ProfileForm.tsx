"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Briefcase, BookUser } from "lucide-react";

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  bio: z.string().max(300, {
    message: "Bio must not be longer than 300 characters.",
  }).optional(),
  roleSpecificField: z.string().optional(), // Example: "Subjects Taught" for teachers, "Enrolled Major" for students
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileFormProps {
  profileType: "Teacher" | "Student";
  defaultValues?: Partial<ProfileFormValues>;
}

export function ProfileForm({ profileType, defaultValues }: ProfileFormProps) {
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
      bio: defaultValues?.bio || "",
      roleSpecificField: defaultValues?.roleSpecificField || "",
    },
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: `${profileType} Profile Updated!`,
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const RoleIcon = profileType === "Teacher" ? Briefcase : BookUser;
  const roleSpecificLabel = profileType === "Teacher" ? "Subjects Taught (comma-separated)" : "Current Major/Area of Study";

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <RoleIcon className="h-8 w-8 text-primary" />
          <CardTitle className="text-3xl font-headline">Manage {profileType} Profile</CardTitle>
        </div>
        <CardDescription>
          Update your {profileType.toLowerCase()} profile information below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} className="text-base" />
                  </FormControl>
                  <FormDescription>Your publicly displayed name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} className="text-base" />
                  </FormControl>
                  <FormDescription>Your login email, kept private.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Biography</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={`Tell us a little bit about yourself as a ${profileType.toLowerCase()}`}
                      className="resize-none text-base min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A brief introduction. This will be visible on your public profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="roleSpecificField"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">{roleSpecificLabel}</FormLabel>
                  <FormControl>
                    <Input placeholder={`E.g., Physics, Math` } {...field} className="text-base"/>
                  </FormControl>
                  <FormDescription>
                    {profileType === "Teacher" ? "List the subjects you specialize in." : "Your primary field of academic interest."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 px-6">
              <User className="mr-2 h-5 w-5" /> Save Changes
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
