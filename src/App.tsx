import { Playground } from "code-kitchen";
import "code-kitchen/styles.css";

import "./styles.css";

const Button = (props: any) => {
  return <button {...props}></button>;
};

const customRequire = (key: string) => {
  if (key === "my-private-lib") {
    return {
      Button
    };
  }
  throw new Error("DEP: " + key + " not found");
};

// Two files for the demo playground
const files = [
  {
    code: `import { Button } from "my-private-lib";
import "./styles.css";

export default function Demo() {
  return <Button>Button</Button>;
}
  `,
    filename: "App.jsx"
  },
  {
    code: `button { width: 200px; }`,
    filename: "styles.css"
  }
];

export default function App() {
  return <Playground initialFiles={files} require={customRequire} />;
}
