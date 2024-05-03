import { getDictionary } from "./dictionaries";

export default async function HomePage({ params: { lang } }) {
  const dictionary = await getDictionary();
  return <div className='capitalize'>my photo feed</div>;
}
