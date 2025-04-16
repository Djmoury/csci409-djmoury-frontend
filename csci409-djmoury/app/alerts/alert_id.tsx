import { useRouter } from 'next/router';

export default function Alert() {
  const router = useRouter();
  const { alert_id } = router.query;

  return <h1>Details for Alert: {alert_id}</h1>;
}