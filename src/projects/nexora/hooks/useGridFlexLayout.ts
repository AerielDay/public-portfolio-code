// import { useEffect, useRef, useState } from "react";

// /**
//  * Custom React hook that toggles between 'grid' and 'flex' on a container,
//  * depending on whether a set number of items fit in one row.
//  * @param itemsPerRow - number of items to try to fit per row (e.g., 4)
//  */
// export function useGridFlexLayout(itemsPerRow: number = 4) {
//     const ref = useRef<HTMLDivElement | null>(null);
//     const [isGrid, setIsGrid] = useState(false);

//     useEffect(() => {
//         function checkLayout() {
//             if (!ref.current) return;
//             const items = Array.from(ref.current.children) as HTMLElement[];
//             if (items.length < itemsPerRow) {
//                 setIsGrid(false);
//                 return;
//             }

//             // Force flex temporarily to measure row
//             ref.current.style.display = "flex";
//             ref.current.style.flexWrap = "wrap";

//             // Grab top position of first N items
//             const tops = items.slice(0, itemsPerRow).map(item =>
//                 item.getBoundingClientRect().top
//             );
//             // If all tops are the same, they fit one row
//             if (tops.length > 0 && tops[0] !== undefined) {
//                 const allOnSameRow = tops.every(t => Math.abs(t - tops[0]!) < 2);
//                 setIsGrid(allOnSameRow);
//             } else {
//                 setIsGrid(false);
//             }
//             // Clean up temporary style
//             ref.current.style.display = "";
//             ref.current.style.flexWrap = "";
//         }
//         checkLayout();
//         window.addEventListener("resize", checkLayout);
//         return () => window.removeEventListener("resize", checkLayout);
//     }, [itemsPerRow]);

//     return [ref, isGrid] as const;
// }