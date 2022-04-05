import "../styles/globals.css";
import { UniformContext } from "@uniformdev/context-react";
import { createUniformContext } from "../lib/context/uniformcontext";

const clientContext = createUniformContext();

export default function MyApp({ Component, pageProps, serverUniformContext }) {
  return (
    <UniformContext context={serverUniformContext ?? clientContext}>
      <Component {...pageProps} />
    </UniformContext>
  );
}
