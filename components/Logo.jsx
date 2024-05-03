import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        className='max-w-[100px] md:max-w-[165px]'
        src={"/lws_logo.png"}
        alt='Logo Image'
        width={100}
        height={165}
        priority
      />
    </Link>
  );
};

export default Logo;
