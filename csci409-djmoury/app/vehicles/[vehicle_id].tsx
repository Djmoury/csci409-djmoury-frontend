import { useRouter } from 'next/router';

export default function Vehicle() {
  const router = useRouter();
  const { vehicle_id } = router.query;

  return <h1>Details for Vehicle: {vehicle_id}</h1>;
}
