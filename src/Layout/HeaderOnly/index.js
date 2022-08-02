import Header from '~/Layout/components/Header';

function HeaderOnly({ children }) {
    return (
        <>
            <Header />
            <div className="container">{children}</div>
        </>
    );
}

export default HeaderOnly;
