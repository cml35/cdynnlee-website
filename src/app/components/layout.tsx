import NavigationBar from "./NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full min-h-screen bg-custom-100">
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
}
