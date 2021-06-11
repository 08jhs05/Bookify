// Importting hooks and Libraries

import "../App.css";
import Scan from "./Scan"

export default function ScanDemo() {
  return (
    <section className="scan-demo">
      <Scan isDemo={true}/>

    </section>
  );
}
