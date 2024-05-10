import CustomLink from '../src/components/Link';

export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 :O</h1>
            <CustomLink href="/">
                Ir para a home
            </CustomLink>
        </div>
    )
}