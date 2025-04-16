import { useRouter } from 'next/router';

export default function Line() {
  const router = useRouter();
  const { line_id } = router.query;

  return <h1>Details for Line: {line_id}</h1>;
}
