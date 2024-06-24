"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
	const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_URI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
						query MENU_ITEMS {
							menuItems(where: {location: PRIMARY}) {
								nodes {
									key: id
									title: label
									url
									target
								}
							}
						}
            `,
          }),
        });

        const { data } = await response.json();
        setMenuItems(data.menuItems.nodes);
      } catch (error) {
        console.error("Error fetching menu items:", error);
				setError("Failed to load menu items.");
      }
    };

    fetchMenuItems();
  }, []);

	  if (error) {
    return <p>{error}</p>;
  }

  return (
    <header className="flex justify-between px-16 py-4 items-center">
      <Link
        className="font-bold text-2xl text-black hover:text-blue transition-colors"
        rel="stylesheet"
        href="/"
      >
        Bialovetskyi
      </Link>
      <ul className="flex justify-between">
        {menuItems.map((item) => (
          <li className="mx-4" key={item.key}>
            <a
              className="text-black hover:text-blue transition-colors"
              href={item.url}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-blue text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
        Let's Talk
      </button>
    </header>
  );
};

export default Menu;
