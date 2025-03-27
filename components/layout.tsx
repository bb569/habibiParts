import Nav from "./Nav";
interface myLay {
  children: React.ReactNode;
}
function Layout({ children }: myLay) {
  return (
    <div  >
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
