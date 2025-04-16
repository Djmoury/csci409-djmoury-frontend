import { useRouter } from 'next/router';

export default function Route() {
  const router = useRouter();
  const { route_id } = router.query;

  return <h1>Details for Route: {route_id}</h1>;
}
