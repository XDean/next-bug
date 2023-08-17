import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {
  return (
    <ul>
      <li>
        <Link href={'/target'}>
          Redirect to /target
        </Link>
      </li>
      <li>
        <Link href={'/redirect'}>
          Redirect to /redirect
        </Link>
      </li>
    </ul>
  );
}