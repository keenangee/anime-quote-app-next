const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 pb-2 w-full text-center text-[1rem] sm:text-[1.5rem]">
      <p>
        Keenan Gee &copy; 2021 |{" "}
        <a
          href="https://www.linkedin.com/in/keenangee/"
          className="text-shadow-dark"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://twitter.com/KeenanGee" className="text-shadow-dark">
          Twitter
        </a>
      </p>
    </footer>
  );
};

export default Footer;
