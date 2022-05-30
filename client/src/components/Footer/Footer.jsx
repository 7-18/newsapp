import { NavBar } from "../Navbar/NavBar";

export const Footer = () => {
  return (
    <footer className="footer bg-light fixed-bottom">
      <NavBar />
      <p className="text-center text-black-50">
        &copy; {new Date().getFullYear()} NewsApp
      </p>
    </footer>
  );
};