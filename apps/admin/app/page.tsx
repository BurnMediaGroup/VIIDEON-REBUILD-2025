// apps/admin/app/page.tsx
import { redirect } from "next/navigation";

export default function Page() {
  // Whenever someone visits "/", send them to "/users"
  redirect("/users");
}
