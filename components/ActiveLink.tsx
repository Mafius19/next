import { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

interface Props {
  text: string;
  href: string;
}

export const ActiveLink = ({ text, href }: Props) => {

  const router = useRouter()
  console.log(router)
  return (
    <Link style={router.asPath !== href? style: undefined} href={href}>{text}</Link>
  )
}

// ActiveLink.propTypes = {
//   text: PropTypes.string.isRequired,
//   href: PropTypes.string.isRequired,
// };

export default ActiveLink