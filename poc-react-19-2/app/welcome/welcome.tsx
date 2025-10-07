import { Activity } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div>
          <Activity>
            This should not render
          </Activity>
          <Activity>
            This should render
          </Activity>
        </div>
      </div>
    </main>
  );
}
