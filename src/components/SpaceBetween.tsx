import { styled } from "baseui";

const SpaceBetween = styled<{ $direction?: "row" | "column" }, "div">(
  "div",
  ({ $direction = "row" }) => ({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: $direction,
  })
);

export default SpaceBetween;
