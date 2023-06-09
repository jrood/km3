import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default () => (
  <Html lang="en">
    <Head>
      <Title>Kronmeter</Title>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Body>
      <Routes>
        <FileRoutes />
      </Routes>
      <Scripts />
    </Body>
  </Html>
);
