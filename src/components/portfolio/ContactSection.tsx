import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Message sent — thank you!");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="contact" title="Let's build something">
          I'm passionate about big data and eager to connect with others who want to bring a
          hardware background into cloud infrastructure and data analytics.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href="mailto:janrichogat@gmail.com"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Mail className="size-5 text-[color:var(--primary)]" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">EMAIL</p>
                <p className="text-sm">janrichogat@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/Jan-Ric"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Github className="size-5" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">GITHUB</p>
                <p className="text-sm">github.com/Jan-Ric</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/janrichogat/"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-3 rounded-lg border border-border bg-card p-4"
            >
              <Linkedin className="size-5 text-[color:var(--link)]" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">LINKEDIN</p>
                <p className="text-sm">linkedin.com/in/janrichogat</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-6 space-y-4"
          >
            <div className="grid gap-2">
              <Label htmlFor="name" className="font-mono text-xs">
                name
              </Label>
              <Input id="name" name="name" required maxLength={100} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="font-mono text-xs">
                email
              </Label>
              <Input id="email" name="email" type="email" required maxLength={255} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="font-mono text-xs">
                message
              </Label>
              <Textarea id="message" name="message" required maxLength={2000} rows={5} />
            </div>
            <Button type="submit" className="w-full font-mono" disabled={submitting}>
              <Send className="size-4" /> {submitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}