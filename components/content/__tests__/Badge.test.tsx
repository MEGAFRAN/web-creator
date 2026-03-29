import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../Badge";

describe("Badge", () => {
  it("renders the label", () => {
    render(<Badge label="New" />);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies the default variant class when no variant is provided", () => {
    render(<Badge label="Default" />);
    expect(screen.getByText("Default")).toHaveClass("bg-muted-bg");
  });

  it("applies the success variant class", () => {
    render(<Badge label="Success" variant="success" />);
    expect(screen.getByText("Success")).toHaveClass("bg-green-100");
  });

  it("applies the error variant class", () => {
    render(<Badge label="Error" variant="error" />);
    expect(screen.getByText("Error")).toHaveClass("bg-red-100");
  });
});
