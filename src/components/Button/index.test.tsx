import { Button } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Button />", () => {
  it("renders correctly", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeTruthy();
  });

  it("call onClick function on button press", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });
});
