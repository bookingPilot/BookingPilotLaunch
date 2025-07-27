import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function Stats() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from("site_visits")
      .select("id", { count: "exact", head: true })
      .then(({ count }) => setVisits(count ?? 0));
  }, []);

  return (
    <div className="my-2 text-right">
      <span className="text-sm">👀 {visits ?? "..."} users watching the takeoff. Come aboard and shape the BookingPilot journey with us!</span>
    </div>
  );
} 