import styles from "../../styles/components/Header.module.scss";
import Link from "next/link";
import Logo from "../Logo";
import { BsSearch, BsBookmark, BsPen } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { HeaderProps } from "./Header.types";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Header({
  dropdown,
  setDropdown,
  search,
  setSearch,
}: HeaderProps) {
  let menuRef = useClickOutside(() => setDropdown(false));

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.search_input_container}>
          <input
            type="text"
            placeholder="Search"
            className={styles.search_input}
          />
        </div>
        <div className={styles.icons_button_container}>
          <div className={styles.btn_container}>
            <Link href="/login">
              <button>Login</button>
            </Link>
            <Link href="/register">
              <button>Sign up</button>
            </Link>
          </div>

          {/* When Logged in */}

          {/* <div className={styles.create_btn}>
            <Link href="/">
              <button>
                <BsPen className={styles.dropdown_icons} size={15} /> Write a
                Post
              </button>
            </Link>
          </div> */}
          <div className={styles.search_and_bar_container}>
            <BsSearch
              className={styles.search_icon}
              size={20}
              onClick={() => {
                setDropdown(false);
                setSearch((prev) => !prev);
              }}
            />
            {dropdown ? (
              <IoMdClose
                className={styles.bars_icon}
                size={35}
                onClick={() => {
                  setSearch(false);
                  setDropdown((prev) => !prev);
                }}
              />
            ) : (
              <IoMdArrowDropdown
                className={styles.bars_icon}
                size={35}
                onClick={() => {
                  setSearch(false);
                  setDropdown((prev) => !prev);
                }}
              />
            )}
          </div>
        </div>
        <nav
          className={[
            styles.dropdown_navigation,
            dropdown ? styles.open_dropdown : "",
          ].join(" ")}
          ref={menuRef}
        >
          <ul className={styles.nav_list}>
            <li>
              <Link href="/profile">
                <BiUserCircle className={styles.dropdown_icons} size={22} />{" "}
                Profile
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsBookmark className={styles.dropdown_icons} size={19} /> Saved
                Posts
              </Link>
            </li>
            <li>
              <Link href="/">
                <BsPen className={styles.dropdown_icons} size={19} /> Write a
                Post
              </Link>
            </li>
            <li>
              <Link href="/">
                <GrDocumentText className={styles.dropdown_icons} size={19} />{" "}
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={[
            styles.search_bar,
            search ? styles["open_search"] : "",
          ].join(" ")}
        >
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search"
          />
        </div>
      </header>
    </>
  );
}
