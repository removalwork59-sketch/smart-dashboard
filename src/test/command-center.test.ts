import { describe, expect, it } from "vitest";
import { isWorkspaceRunning } from "@/lib/command-center";
import type { WorkspaceTask } from "@/lib/workspace-events";

const task: WorkspaceTask = { id: 1, kind: "files", title: "actual.json", status: "running", output: "", bytes: 0, events: ["File read started"] };
describe("Command center operation evidence", () => {
  it("expands only when a real task is running", () => {
    expect(isWorkspaceRunning(null)).toBe(false);
    expect(isWorkspaceRunning(task)).toBe(true);
  });
  it("returns AYRA after actual completion", () => {
    expect(isWorkspaceRunning({ ...task, status: "completed" })).toBe(false);
  });
  it("does not animate execution after a real failure", () => {
    expect(isWorkspaceRunning({ ...task, status: "error" })).toBe(false);
  });
});