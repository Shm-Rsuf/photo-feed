import { getDictionary } from "./dictionaries";

export default async function HomePage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  console.log(typeof dictionary);
  return <div>{dictionary.views}</div>;
}
