import { ReactElement } from "react";
import Navbar from "@components/navbar";

export default function Layout({ children }: { children?: ReactElement }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
