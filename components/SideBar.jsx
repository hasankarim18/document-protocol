"use client";

import Link from "next/link";

export default function SideBar({ docs }) {
  console.log(docs);
  const roots = docs.filter((doc) => doc.parent === null);
  const nonRoots = Object.groupBy(
    docs.filter((doc) => doc.parent != null), // parent level
    (doc) => doc.parent
  );

  // const nonRootFilter = docs.filter((doc) => doc.parent !== null);

  console.log({ nonRoots });

  return (
    <div>
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
          <ul role="list" className="border-l border-transparent">
            {roots.map((rootNode) => (
              <li key={rootNode.id} className="relative">
                {/* root node */}
                <Link
                  aria-current="page"
                  className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                  href={`/docs/${rootNode.id}`}
                >
                  <span className="truncate">{rootNode.title}</span>
                </Link>
                {/* subroot node */}
                {nonRoots[rootNode.id] && (
                  <ul role="list" className="border-l border-transparent">
                    {nonRoots[rootNode.id].map((subRoot) => (
                      <li key={subRoot.id}>
                        <Link
                          className="flex justify-between gap-2 py-1 pl-8 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                          href={`/docs/${rootNode.id}/${subRoot.id}`}
                        >
                          <span className="truncate">{subRoot.title}</span>
                        </Link>
                      </li>
                    ))}
                    {/* subroot node ends in below ul */}
                  </ul>
                )}
              </li> // this is root node li
            ))}
          </ul>
          {/* up ul is rootnode ul */}
        </div>
      </ul>
      {/* my approach */}
      {/* <ul>
        {roots.map((rootNode) => {
          const childNodes = docs.filter((doc) => doc.parent === rootNode.id);

          return (
            <li className="mb-4" key={rootNode.id}>
              {rootNode.title}
              {childNodes.length > 0 && (
                <ul className="ps-8">
                  {childNodes.map((childNode) => (
                    <li className="list-disc" key={childNode.id}>
                      {" "}
                      {childNode.title}{" "}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}
