/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";

const loadingAnimation = keyframes`
0% {
  background-position: -800px 0
}
100% {
  background-position: 800px 0
}
`;

export function LoadingCard() {
  return (
    <div
      css={css({
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        [mq["md"]]: {
          gridTemplateColumns: "1fr 1fr 1fr",
        },
        [mq["lg"]]: {
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
      })}
    >
      {[...Array(4)].map((e, key) => (
        <div
          key={key}
          css={css({
            boxShadow: "0 0 10px 5px #00000007",
            borderRadius: "10px",
            aspectRatio: "1",
            animation: `${loadingAnimation} 2s infinite`,
            backgroundImage:
              "linear-gradient(to right, #fff 8%, #f7f7f7 18%, #fff 33%)",
            backgroundSize: "800px 104px",
          })}
        />
      ))}
    </div>
  );
}
