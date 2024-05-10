import NextLink from 'next/link';

export default function CustomLink({ children, href, ...props}) {
    return (
        <NextLink href={href} passHref>
            <p {...props}>{children}</p>
        </NextLink>
    );
}