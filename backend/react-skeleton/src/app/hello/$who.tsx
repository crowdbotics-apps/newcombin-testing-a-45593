import { useParams } from "react-router-dom";

export default function Hello() {
  const data = useParams() as { who: string };

  return <>{data.who}</>;
}
