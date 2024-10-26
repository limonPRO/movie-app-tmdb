import ExploreMovie from "@/components/ui/home/ExploreMovie";
import { auth } from "@/auth";


export default async function page() {

  const session = await auth();
  return (
      <ExploreMovie  />
  );
}
