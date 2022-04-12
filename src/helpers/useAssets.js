// export default function useAssets() {
//   const svgs = import.meta.globEager("/src/assets/*.svg");
//   const pngs = import.meta.globEager("/src/assets/*.png");
//   const jpegs = import.meta.globEager("/src/assets/*.jpeg");

//   return {
//     logo1: pngs["/src/assets/images/profileLogos/1.png"].default,
//     logo2: pngs["/src/assets/images/profileLogos/2.png"].default,
//     logo3: pngs["/src/assets/images/profileLogos/3.png"].default,
//   };
// }


export const useAssets = () => {
	const svgs = import.meta.globEager("/src/assets/*.svg");
  const pngs = import.meta.globEager("/src/assets/*.png");
  const jpegs = import.meta.globEager("/src/assets/*.jpeg");

  return {
    logo1: pngs["/src/assets/images/profileLogos/1.png"].default,
    logo2: pngs["/src/assets/images/profileLogos/2.png"].default,
    logo3: pngs["/src/assets/images/profileLogos/3.png"].default,
  };
}