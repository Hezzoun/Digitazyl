import { redirect } from "next/navigation"

export default function TopicsRedirect() {
  redirect("/home#topics")
}
