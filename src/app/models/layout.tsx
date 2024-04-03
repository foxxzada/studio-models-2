import Navbar from '@/components/Navbar';

export default function ModelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
