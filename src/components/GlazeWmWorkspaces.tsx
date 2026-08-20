import type { GlazeWmOutput } from 'zebar';

interface GlazeWmWorkspacesProps {
  glazewm?: GlazeWmOutput | null;
}

export function GlazeWmWorkspaces({ glazewm }: GlazeWmWorkspacesProps) {
  const workspaces = glazewm?.currentWorkspaces;

  if (!workspaces || workspaces.length === 0) {
    return <span className="ws-fallback">1 2 3</span>;
  }

  return (
    <div className="workspaces-container">
      {workspaces.map(ws => {
        const isFocused = ws.hasFocus;
        const isDisplayed = ws.isDisplayed;
        const className = `ws-btn ${isFocused ? 'focused' : isDisplayed ? 'displayed' : ''}`.trim();

        return (
          <button
            key={ws.name}
            className={className}
            onClick={() => glazewm?.runCommand(`focus --workspace ${ws.name}`)}
            title={`Workspace ${ws.displayName ?? ws.name}`}
          >
            {ws.displayName ?? ws.name}
          </button>
        );
      })}
    </div>
  );
}
