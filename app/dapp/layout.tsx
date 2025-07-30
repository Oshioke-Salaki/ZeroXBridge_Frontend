import AppLayout from "../components/layout/AppLayout";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}

export default layout;
