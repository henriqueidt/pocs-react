import { ProfilerPanel } from "~/components/ProfilerPanel";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import SlowList from "~/components/SlowList";
import FastList from "~/components/Fastlist";

export function Welcome() {
  const items = Array.from({ length: 500 }, (_, i) => `Item ${i}`);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex items-center gap-16 min-h-0">
        <ProfilerPanel id="Slowlist">
          <SlowList items={items} />
        </ProfilerPanel>

        <ProfilerPanel id="Fastlist">
          <FastList items={items} />
        </ProfilerPanel>
      </div>
    </main>
  );
}
